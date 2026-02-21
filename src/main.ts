import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import * as UiKit from "@mfe-sols/ui-kit";
import { initMfeErrorReporter } from "./mfe-error-reporter";

const defineDesignSystem =
  typeof UiKit.defineDesignSystem === "function" ? UiKit.defineDesignSystem : () => undefined;
const ensureTokens =
  typeof UiKit.ensureTokens === "function" ? UiKit.ensureTokens : () => undefined;
const ensureThemeToggle =
  typeof UiKit.ensureThemeToggle === "function" ? UiKit.ensureThemeToggle : () => null;
const initThemeMode =
  typeof UiKit.initThemeMode === "function" ? UiKit.initThemeMode : () => undefined;

const isStandalone = !(window as any).singleSpaNavigate;
defineDesignSystem({ tailwind: true });
ensureTokens();

const reporter = initMfeErrorReporter("@org/playground-vue");
const MODULE_NAME = "@org/playground-vue";
const THEME_STORAGE_KEY = "ds-theme";

const isLocalHost = (value?: string | null) =>
  value === "localhost" || value === "127.0.0.1";
const isTrustedOrigin = (origin: string) => {
  if (origin === window.location.origin) return true;
  const hostIsLocal = isLocalHost(window.location.hostname);
  return hostIsLocal && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
};

const isTrustedMessage = (event: MessageEvent) => {
  if (!isTrustedOrigin(event.origin)) return false;
  const source = event.source;
  if (source && source !== window && source !== window.parent) return false;
  return true;
};

const normalizeDisabledList = (value: unknown): string[] | null => {
  if (!Array.isArray(value)) return null;
  return value.filter((item): item is string => typeof item === "string");
};

const parseDisabledList = (raw: string | null): string[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
};

const isModuleDisabled = (list: string[]) => list.includes(MODULE_NAME);
let lastDisabledState = isModuleDisabled(
  parseDisabledList(window.localStorage.getItem("mfe-disabled"))
);
const shouldReloadForDisabledList = (nextList: string[]) => {
  const nextState = isModuleDisabled(nextList);
  const changed = nextState !== lastDisabledState;
  lastDisabledState = nextState;
  return changed;
};

const createVueApp: typeof createApp = (...args) => {
  const app = createApp(...args);
  app.config.errorHandler = (err, _instance, info) => {
    reporter.report(
      "error",
      "Vue render error",
      `${info || ""}\n${(err as Error)?.stack || String(err)}`
    );
  };
  return app;
};

const resolveMountTarget = (props?: Record<string, unknown>) => {
  const byProps = (props as any)?.domElement;
  if (byProps instanceof HTMLElement) return byProps;

  const appRoot = document.getElementById("app");
  if (appRoot instanceof HTMLElement) return appRoot;

  const singleSpaRoot = document.getElementById(`single-spa-application:${MODULE_NAME}`);
  if (singleSpaRoot instanceof HTMLElement) return singleSpaRoot;

  const fallback = document.createElement("div");
  fallback.id = "app";
  document.body.appendChild(fallback);
  return fallback;
};

const lifecycles = singleSpaVue({
  createApp: createVueApp,
  domElementGetter: (props) => resolveMountTarget(props as Record<string, unknown>),
  appOptions: {
    render: () => h(App),
  },
} as any);

const mountThemeToggle = (container?: Element | null) => {
  const target =
    (container as HTMLElement | null) || resolveMountTarget();
  if (!target) return null;
  initThemeMode(document.documentElement, THEME_STORAGE_KEY);
  return ensureThemeToggle(target, "Toggle theme", {
    target: document.documentElement,
    storageKey: THEME_STORAGE_KEY,
  });
};

let themeCleanup: (() => void) | null = null;
let globalListenersCleanup: (() => void) | null = null;

const ensureGlobalListeners = () => {
  if (globalListenersCleanup) return;

  const onMessage = (event: MessageEvent) => {
    if (!isTrustedMessage(event)) return;
    const data = event.data;
    if (!data || data.type !== "mfe-toggle") return;
    const disabled = normalizeDisabledList(data.disabled);
    if (!disabled) return;
    try {
      window.localStorage.setItem("mfe-disabled", JSON.stringify(disabled));
    } catch {
      return;
    }
    if (
      shouldReloadForDisabledList(disabled) &&
      !window.location.search.includes("mfe-bridge=1")
    ) {
      window.location.reload();
    }
  };

  const onStorage = (event: StorageEvent) => {
    if (event.key !== "mfe-disabled") return;
    const next = parseDisabledList(event.newValue);
    if (shouldReloadForDisabledList(next)) {
      window.location.reload();
    }
  };

  window.addEventListener("message", onMessage);
  window.addEventListener("storage", onStorage);

  globalListenersCleanup = () => {
    window.removeEventListener("message", onMessage);
    window.removeEventListener("storage", onStorage);
    globalListenersCleanup = null;
  };
};

ensureGlobalListeners();

if (isStandalone) {
  let isDisabled = false;
  try {
    isDisabled = isModuleDisabled(
      parseDisabledList(window.localStorage.getItem("mfe-disabled"))
    );
  } catch {
    isDisabled = false;
  }

  if (isDisabled) {
    createVueApp({
      render: () =>
        h("main", { class: "app" }, [
          h("h1", "Playground Vue"),
          h("p", "Module is disabled in monitor."),
        ]),
    }).mount("#app");
  } else {
    createVueApp(App).mount("#app");
    themeCleanup = mountThemeToggle();
  }
}

export const bootstrap = lifecycles.bootstrap;
export const mount = (props: Record<string, unknown>) =>
  lifecycles.mount(props).then(() => {
    ensureGlobalListeners();
    themeCleanup = mountThemeToggle((props as any)?.domElement);
  });
export const unmount = (props: Record<string, unknown>) => {
  if (themeCleanup) {
    themeCleanup();
    themeCleanup = null;
  }
  if (!isStandalone && globalListenersCleanup) {
    globalListenersCleanup();
  }
  return lifecycles.unmount(props);
};
