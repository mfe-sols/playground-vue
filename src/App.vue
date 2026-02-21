<template>
  <section>
    <div class="ds-container ds-stack-6">
      <header class="ds-appbar">
        <div class="ds-toolbar">
          <div class="ds-toolbar__title">UI Kit Playground</div>
          <div class="ds-toolbar__actions">
            <span class="ds-caption">Vue</span>
            <span class="ds-caption">{{ localeLabel }}: {{ locale }}</span>
          </div>
        </div>
      </header>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h1 class="ds-h3">Status</h1>
        <p class="ds-body2">API_BASE_URL: {{ apiBaseUrl }}</p>
        <p class="ds-body2">API /health: {{ apiStatus }}</p>
        <p class="ds-body2">Shared message: {{ sharedMessage }}</p>
        <div class="ds-inline-3">
          <button class="ds-btn ds-btn--primary ds-btn--md ds-anim-scale-in">Vue UI Button</button>
          <button class="ds-btn ds-btn--secondary ds-btn--md" @click="updateShared">
            Update Shared Message
          </button>
          <button class="ds-btn ds-btn--ghost ds-btn--md" @click="showToast">
            Show toast
          </button>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Typography</h2>
        <div class="ds-stack-2">
          <div class="ds-h1">Heading 1</div>
          <div class="ds-h2">Heading 2</div>
          <div class="ds-h3">Heading 3</div>
          <div class="ds-h4">Heading 4</div>
          <div class="ds-h5">Heading 5</div>
          <div class="ds-h6">Heading 6</div>
        </div>
        <div class="ds-stack-2">
          <div class="ds-subtitle1">Subtitle 1</div>
          <div class="ds-subtitle2">Subtitle 2</div>
          <div class="ds-body1">Body 1 — The quick brown fox jumps over the lazy dog.</div>
          <div class="ds-body2">Body 2 — The quick brown fox jumps over the lazy dog.</div>
          <div class="ds-caption">Caption text</div>
          <div class="ds-overline">Overline</div>
          <div class="ds-button-text">Button text</div>
          <a class="ds-link" href="#">Link style</a>
          <code class="ds-mono">Monospace sample</code>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Grid Layout</h2>
        <div class="ds-grid-2">
          <div class="ds-card">Grid 2 — Item A</div>
          <div class="ds-card">Grid 2 — Item B</div>
        </div>
        <div class="ds-grid-3">
          <div class="ds-card">Grid 3 — Item A</div>
          <div class="ds-card">Grid 3 — Item B</div>
          <div class="ds-card">Grid 3 — Item C</div>
        </div>
        <div class="ds-grid-4">
          <div class="ds-card">Grid 4 — Item A</div>
          <div class="ds-card">Grid 4 — Item B</div>
          <div class="ds-card">Grid 4 — Item C</div>
          <div class="ds-card">Grid 4 — Item D</div>
        </div>
        <div class="ds-grid-6">
          <div class="ds-card">1</div>
          <div class="ds-card">2</div>
          <div class="ds-card">3</div>
          <div class="ds-card">4</div>
          <div class="ds-card">5</div>
          <div class="ds-card">6</div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Timeline</h2>
        <div class="ds-timeline">
          <div class="ds-timeline-item">
            <div class="ds-timeline-marker ds-timeline-marker--active">1</div>
            <div class="ds-timeline-content">
              <div class="ds-timeline-time">Today · 09:30</div>
              <div class="ds-timeline-title">Order confirmed</div>
              <div class="ds-timeline-description">
                We have received your payment and confirmed the order.
              </div>
            </div>
          </div>
          <div class="ds-timeline-item">
            <div class="ds-timeline-marker">2</div>
            <div class="ds-timeline-content">
              <div class="ds-timeline-time">Today · 11:00</div>
              <div class="ds-timeline-title">Preparing shipment</div>
              <div class="ds-timeline-description">
                Items are being packed and assigned to a courier.
              </div>
            </div>
          </div>
          <div class="ds-timeline-item">
            <div class="ds-timeline-marker">3</div>
            <div class="ds-timeline-content">
              <div class="ds-timeline-time">Tomorrow · 08:45</div>
              <div class="ds-timeline-title">Out for delivery</div>
              <div class="ds-timeline-description">
                The package is on its way to your address.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Tabs</h2>
        <div class="ds-tabs ds-anim-fade-in" ref="tabsRef">
          <span class="ds-tabs-indicator" data-ds-tab-indicator></span>
          <button class="ds-tab" data-ds-tab-trigger data-ds-value="overview">Overview</button>
          <button class="ds-tab" data-ds-tab-trigger data-ds-value="details">Details</button>
          <button class="ds-tab" data-ds-tab-trigger data-ds-value="settings">Settings</button>
        </div>
        <div data-ds-tab-panel data-ds-value="overview" class="ds-anim-slide-up">
          Overview content
        </div>
        <div data-ds-tab-panel data-ds-value="details" hidden class="ds-anim-slide-up">
          Details content
        </div>
        <div data-ds-tab-panel data-ds-value="settings" hidden class="ds-anim-slide-up">
          Settings content
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">DataGrid + DatePicker</h2>
        <div class="ds-datagrid">
          <table class="ds-datagrid__table" ref="datagridRef">
            <thead class="ds-datagrid__head">
              <tr>
                <th class="ds-datagrid__th" data-ds-sortable data-ds-field="name">Name</th>
                <th class="ds-datagrid__th" data-ds-sortable data-ds-field="status">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ds-datagrid__td" data-ds-field="name">Project A</td>
                <td class="ds-datagrid__td" data-ds-field="status">Active</td>
              </tr>
              <tr>
                <td class="ds-datagrid__td" data-ds-field="name">Project B</td>
                <td class="ds-datagrid__td" data-ds-field="status">Paused</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="ds-datepicker" ref="datepickerRef"></div>
        <div class="ds-datepicker" ref="datepickerRangeInlineRef"></div>
        <div class="ds-datepicker-menu" ref="datepickerDropdownRef">
          <div class="ds-datepicker-trigger">
            <input class="ds-input ds-datepicker-input" data-ds-datepicker-input placeholder="Pick a date" readonly />
            <span class="ds-datepicker-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M6.5 3.5V5.5M13.5 3.5V5.5M4.5 7.5H15.5M5.5 6.5H14.5C15.0523 6.5 15.5 6.94772 15.5 7.5V15.5C15.5 16.0523 15.0523 16.5 14.5 16.5H5.5C4.94772 16.5 4.5 16.0523 4.5 15.5V7.5C4.5 6.94772 4.94772 6.5 5.5 6.5Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <div class="ds-datepicker-panel" data-ds-datepicker-panel hidden></div>
        </div>
        <div class="ds-datepicker-menu" ref="dateRangeDropdownRef">
          <div class="ds-datepicker-trigger">
            <input class="ds-input ds-datepicker-input" data-ds-datepicker-input placeholder="Select range" readonly />
            <span class="ds-datepicker-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M6.5 3.5V5.5M13.5 3.5V5.5M4.5 7.5H15.5M5.5 6.5H14.5C15.0523 6.5 15.5 6.94772 15.5 7.5V15.5C15.5 16.0523 15.0523 16.5 14.5 16.5H5.5C4.94772 16.5 4.5 16.0523 4.5 15.5V7.5C4.5 6.94772 4.94772 6.5 5.5 6.5Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <div class="ds-datepicker-panel" data-ds-datepicker-panel hidden></div>
        </div>
        <div class="ds-datepicker-menu" ref="dateTimeDropdownRef">
          <div class="ds-datepicker-trigger">
            <input class="ds-input ds-datepicker-input" data-ds-datepicker-input placeholder="Pick date & time"
              readonly />
            <span class="ds-datepicker-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M6.5 3.5V5.5M13.5 3.5V5.5M4.5 7.5H15.5M5.5 6.5H14.5C15.0523 6.5 15.5 6.94772 15.5 7.5V15.5C15.5 16.0523 15.0523 16.5 14.5 16.5H5.5C4.94772 16.5 4.5 16.0523 4.5 15.5V7.5C4.5 6.94772 4.94772 6.5 5.5 6.5Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <div class="ds-datepicker-panel" data-ds-datepicker-panel hidden>
            <div data-ds-datepicker-calendar></div>
            <div class="ds-datepicker__footer" data-ds-datepicker-footer>
              <span class="ds-datepicker__footer-label">Time</span>
              <div class="ds-time-picker" data-ds-datetime-picker>
                <div class="ds-select-menu ds-time-picker__segment" data-ds-time-hour data-placeholder="HH"
                  data-searchable="true"
                  data-options='["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]'>
                  <button class="ds-select-trigger" type="button">
                    <span class="ds-select-trigger__label">HH</span>
                    <span class="ds-select-trigger__icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>
                <span class="ds-time-picker__colon">:</span>
                <div class="ds-select-menu ds-time-picker__segment" data-ds-time-minute data-placeholder="MM"
                  data-searchable="true"
                  data-options='["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"]'>
                  <button class="ds-select-trigger" type="button">
                    <span class="ds-select-trigger__label">MM</span>
                    <span class="ds-select-trigger__icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">TreeView</h2>
        <div class="ds-tree mfe-tree" ref="treeRef" id="demo-tree">
          <div class="ds-tree__item" data-ds-tree-item data-ds-id="root" data-state="open">
            <button class="ds-tree__toggle" data-ds-tree-toggle>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
            <span class="mfe-tree__node-icon" aria-hidden="true">WS</span>
            <span class="mfe-tree__content">
              <span class="ds-tree__label mfe-tree__label">Workspace</span>
              <span class="mfe-tree__meta">Unified platform modules</span>
            </span>
            <span class="mfe-tree__pill">Live</span>
            <div class="ds-tree__children" data-ds-tree-children data-state="open">
              <div class="ds-tree__item" data-ds-tree-item data-ds-id="projects" data-state="open">
                <button class="ds-tree__toggle" data-ds-tree-toggle>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
                <span class="mfe-tree__node-icon" aria-hidden="true">PJ</span>
                <span class="mfe-tree__content">
                  <span class="ds-tree__label mfe-tree__label">Projects</span>
                  <span class="mfe-tree__meta">Production applications</span>
                </span>
                <span class="mfe-tree__pill">3</span>
                <div class="ds-tree__children" data-ds-tree-children data-state="open">
                  <div class="ds-tree__item" data-ds-tree-item data-ds-id="project-a">
                    <span class="mfe-tree__spacer" aria-hidden="true"></span>
                    <span class="mfe-tree__node-icon mfe-tree__node-icon--leaf" aria-hidden="true">A</span>
                    <span class="mfe-tree__content">
                      <span class="ds-tree__label mfe-tree__label">Project Alpha</span>
                      <span class="mfe-tree__meta">Core commerce shell</span>
                    </span>
                  </div>
                  <div class="ds-tree__item" data-ds-tree-item data-ds-id="project-b">
                    <span class="mfe-tree__spacer" aria-hidden="true"></span>
                    <span class="mfe-tree__node-icon mfe-tree__node-icon--leaf" aria-hidden="true">B</span>
                    <span class="mfe-tree__content">
                      <span class="ds-tree__label mfe-tree__label">Project Beta</span>
                      <span class="mfe-tree__meta">Analytics workspace</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="ds-tree__item" data-ds-tree-item data-ds-id="teams" data-state="closed">
                <button class="ds-tree__toggle" data-ds-tree-toggle>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
                <span class="mfe-tree__node-icon" aria-hidden="true">TM</span>
                <span class="mfe-tree__content">
                  <span class="ds-tree__label mfe-tree__label">Teams</span>
                  <span class="mfe-tree__meta">Organization units</span>
                </span>
                <span class="mfe-tree__pill">2</span>
                <div class="ds-tree__children" data-ds-tree-children data-state="closed" hidden>
                  <div class="ds-tree__item" data-ds-tree-item data-ds-id="team-a">
                    <span class="mfe-tree__spacer" aria-hidden="true"></span>
                    <span class="mfe-tree__node-icon mfe-tree__node-icon--leaf" aria-hidden="true">DS</span>
                    <span class="mfe-tree__content">
                      <span class="ds-tree__label mfe-tree__label">Design</span>
                      <span class="mfe-tree__meta">UX and visual language</span>
                    </span>
                  </div>
                  <div class="ds-tree__item" data-ds-tree-item data-ds-id="team-b">
                    <span class="mfe-tree__spacer" aria-hidden="true"></span>
                    <span class="mfe-tree__node-icon mfe-tree__node-icon--leaf" aria-hidden="true">EN</span>
                    <span class="mfe-tree__content">
                      <span class="ds-tree__label mfe-tree__label">Engineering</span>
                      <span class="mfe-tree__meta">Platform and delivery</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="ds-tree__item" data-ds-tree-item data-ds-id="archives" data-state="closed">
                <button class="ds-tree__toggle" data-ds-tree-toggle>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
                <span class="mfe-tree__node-icon" aria-hidden="true">AR</span>
                <span class="mfe-tree__content">
                  <span class="ds-tree__label mfe-tree__label">Archives</span>
                  <span class="mfe-tree__meta">Historical snapshots</span>
                </span>
                <span class="mfe-tree__pill">2</span>
                <div class="ds-tree__children" data-ds-tree-children data-state="closed" hidden>
                  <div class="ds-tree__item" data-ds-tree-item data-ds-id="2023">
                    <span class="mfe-tree__spacer" aria-hidden="true"></span>
                    <span class="mfe-tree__node-icon mfe-tree__node-icon--leaf" aria-hidden="true">23</span>
                    <span class="mfe-tree__content">
                      <span class="ds-tree__label mfe-tree__label">2023</span>
                      <span class="mfe-tree__meta">Release notes and logs</span>
                    </span>
                  </div>
                  <div class="ds-tree__item" data-ds-tree-item data-ds-id="2022">
                    <span class="mfe-tree__spacer" aria-hidden="true"></span>
                    <span class="mfe-tree__node-icon mfe-tree__node-icon--leaf" aria-hidden="true">22</span>
                    <span class="mfe-tree__content">
                      <span class="ds-tree__label mfe-tree__label">2022</span>
                      <span class="mfe-tree__meta">Baseline archive</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Feedback + Overlays</h2>
        <div class="ds-inline-3">
          <button class="ds-btn ds-btn--primary ds-btn--md" @click="showToast">Show toast</button>
          <button class="ds-btn ds-btn--secondary ds-btn--md" @click="openDialog">Open dialog</button>
          <div class="relative">
            <button class="ds-btn ds-btn--ghost ds-btn--md" ref="tooltipTriggerRef">Tooltip</button>
            <div class="ds-tooltip ds-tooltip--top" ref="tooltipRef" hidden>Tooltip content</div>
          </div>
        </div>
        <div class="ds-progress">
          <div class="ds-progress__bar" style="width: 60%"></div>
        </div>
        <div class="ds-snackbar" role="status" aria-live="polite">
          Snackbar message
          <div class="ds-snackbar__actions">
            <button class="ds-snackbar__action">Undo</button>
          </div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Form Inputs</h2>
        <div class="ds-grid-2">
          <div class="ds-field">
            <label class="ds-label">First name</label>
            <input class="ds-input" placeholder="Jane" />
            <span class="ds-helper">Required</span>
          </div>
          <div class="ds-field">
            <label class="ds-label">Last name</label>
            <input class="ds-input" placeholder="Doe" />
          </div>
        </div>
        <div class="ds-field">
          <label class="ds-label">Email</label>
          <div class="ds-input-group">
            <input class="ds-input" placeholder="you@domain.com" />
            <button class="ds-btn ds-btn--secondary ds-btn--md">Verify</button>
          </div>
          <span class="ds-error">Invalid email</span>
        </div>
        <div class="ds-field">
          <label class="ds-label">Password</label>
          <div class="ds-input-group relative">
            <input
              class="ds-input pr-10"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Create a password"
              autocomplete="new-password"
            />
            <button
              class="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-surface-muted hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              type="button"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
              :title="showPassword ? 'Hide password' : 'Show password'"
              @click="togglePassword"
            >
              <svg
                v-if="showPassword"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M3 3l18 18" />
                <path d="M10.7 10.7a3 3 0 0 0 4.24 4.24" />
                <path d="M9.88 4.73A9.96 9.96 0 0 1 12 4.5c6 0 9.5 7 9.5 7a18.4 18.4 0 0 1-4.27 5.12" />
                <path d="M6.11 6.11A18.4 18.4 0 0 0 2.5 11.5s3.5 7 9.5 7a9.96 9.96 0 0 0 5.16-1.45" />
              </svg>
              <svg
                v-else
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
          <span class="ds-helper">Use at least 8 characters.</span>
        </div>
        <div class="ds-grid-2">
          <div class="ds-field">
            <label class="ds-label">Phone number</label>
            <div class="ds-input-group">
              <div class="ds-select-menu ds-phone-select" data-placeholder="Code"
                data-options='["+1","+33","+44","+49","+65","+81","+84"]' ref="phoneSelectRef">
                <button class="ds-select-trigger" type="button">
                  <span class="ds-select-trigger__label">+1</span>
                  <span class="ds-select-trigger__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
              <input class="ds-input" inputmode="tel" placeholder="(555) 123-4567" :value="phoneValue"
                @input="onPhoneInput" />
            </div>
            <span class="ds-helper">Select country code</span>
          </div>
          <div class="ds-field">
            <label class="ds-label">Credit card</label>
            <div class="ds-input-group">
              <input class="ds-input" inputmode="numeric" placeholder="1234 5678 9012 3456" :value="cardValue"
                @input="onCardInput" />
              <span class="ds-input-suffix">VISA</span>
            </div>
            <span class="ds-helper">Auto formatted</span>
          </div>
        </div>
        <div class="ds-grid-3">
          <div class="ds-field" style="grid-column: span 2">
            <label class="ds-label">Card details</label>
            <input class="ds-input" placeholder="Name on card" />
          </div>
          <div class="ds-field">
            <label class="ds-label">CVC</label>
            <input class="ds-input" inputmode="numeric" placeholder="123" :value="cardCvc" @input="onCvcInput" />
            <span class="ds-helper">3–4 digits</span>
          </div>
        </div>
        <div class="ds-grid-2">
          <div class="ds-field">
            <label class="ds-label">Quantity</label>
            <div class="ds-input-group">
              <button class="ds-btn ds-btn--ghost ds-btn--sm" @click="decreaseQuantity">−</button>
              <input class="ds-input" inputmode="numeric" :value="quantityValue" @input="onQuantityInput" />
              <button class="ds-btn ds-btn--ghost ds-btn--sm" @click="increaseQuantity">+</button>
            </div>
            <span class="ds-helper">Stepper input</span>
          </div>
          <div class="ds-field">
            <label class="ds-label">Amount</label>
            <div class="ds-input-group">
              <div class="ds-select-menu ds-currency-select" data-placeholder="USD"
                data-options='["USD","EUR","VND","JPY","SGD"]' ref="currencySelectRef">
                <button class="ds-select-trigger" type="button">
                  <span class="ds-select-trigger__label">USD</span>
                  <span class="ds-select-trigger__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
              <input class="ds-input" inputmode="decimal" placeholder="0.00" :value="currencyValue"
                @input="onCurrencyInput" />
              <span class="ds-input-suffix">.00</span>
            </div>
            <span class="ds-helper">Currency input</span>
          </div>
        </div>
        <div class="ds-inline-4">
          <label class="ds-inline-2">
            <input type="checkbox" class="ds-checkbox" />
            <span class="ds-body2">Remember me</span>
          </label>
          <label class="ds-inline-2">
            <input type="radio" name="opt" class="ds-radio" />
            <span class="ds-body2">Option A</span>
          </label>
          <label class="ds-switch-field">
            <input class="ds-switch-input" type="checkbox" />
            <span class="ds-switch-control"></span>
            <span class="ds-body2">Notifications</span>
          </label>
        </div>
        <textarea class="ds-textarea" placeholder="Message"></textarea>
        <div class="ds-select-menu" data-placeholder="Choose an option"
          data-options='["Option 1","Option 2","Option 3"]' ref="selectMenuRef">
          <button class="ds-select-trigger" type="button">
            <span class="ds-select-trigger__label">Choose an option</span>
            <span class="ds-select-trigger__icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>
        <div class="ds-select-menu" data-placeholder="Select tags" data-multiple="true"
          data-options='["Design","Product","Engineering","Ops","Research"]' data-value='["Design","Product"]'
          ref="selectMenuMultiRef">
          <button class="ds-select-trigger" type="button">
            <span class="ds-select-trigger__label">Select tags</span>
            <span class="ds-select-trigger__icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in shadow-sm hover:shadow-md transition-shadow duration-200">
        <h2 class="ds-h4">Editor</h2>
        <div id="playground-editor" data-ds-editor-shell></div>
        <div class="ds-inline-3">
          <button class="ds-btn ds-btn--primary ds-btn--sm" @click="saveEditor">Save</button>
          <span class="ds-body2">{{ editorSavedAt ? `Saved ${editorSavedAt}` : "Not saved yet" }}</span>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in shadow-sm hover:shadow-md z-10 transition-shadow duration-200">
        <h2 class="ds-h4">Inline Text Editor</h2>
        <p class="ds-body1 ds-inline-edit" data-ds-inline-edit="headline">
          Build delightful experiences with a unified design system.
        </p>
        <p class="ds-body2 ds-inline-edit" data-ds-inline-edit="subhead">
          Hover or click to edit inline. Changes save to the text immediately.
        </p>
        <div
          v-if="inlineEditorOpen"
          class="ds-inline-editor ds-anim-fade-in"
          :style="{ left: `${inlineEditorLeft}px`, top: `${inlineEditorTop}px` }"
          @mouseenter="onInlineEditorEnter"
          @mouseleave="onInlineEditorLeave"
          @pointerdown="onInlineEditorPointerDown"
          @pointermove="onInlineEditorPointerMove($event)"
          @focusin="onInlineEditorFocusIn"
          @focusout="onInlineEditorFocusOut($event)"
        >
          <div class="ds-stack-2">
            <label class="ds-label">Edit text</label>
            <div id="inline-richtext-editor" data-ds-editor-shell></div>
            <div class="ds-inline-3">
              <button class="ds-btn ds-btn--primary ds-btn--sm" @click="saveInlineEditor">Save</button>
              <button class="ds-btn ds-btn--secondary ds-btn--sm" @click="cancelInlineEditor">Cancel</button>
            </div>
          </div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Dropdown</h2>
        <div class="ds-dropdown">
          <button class="ds-btn ds-btn--secondary ds-btn--md" ref="dropdownTriggerRef">Open menu</button>
          <div class="ds-dropdown__content" ref="dropdownContentRef" data-align="start" hidden>
            <div class="ds-menu">
              <button class="ds-menu-item">Edit</button>
              <button class="ds-menu-item">Duplicate</button>
              <div class="ds-menu-separator"></div>
              <button class="ds-menu-item">Archive</button>
            </div>
          </div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Data Display</h2>
        <div class="ds-inline-4">
          <span class="ds-badge">Default</span>
          <span class="ds-badge ds-badge--success">Success</span>
          <span class="ds-badge ds-badge--warning">Warning</span>
          <span class="ds-badge ds-badge--danger">Danger</span>
        </div>
        <div class="ds-inline-3">
          <span class="ds-chip">Design</span>
          <span class="ds-chip">
            Tag
            <button class="ds-chip__close" aria-label="Remove">×</button>
          </span>
        </div>
        <div class="ds-avatar-group">
          <span class="ds-avatar">JD</span>
          <span class="ds-avatar">AB</span>
          <span class="ds-avatar">MN</span>
        </div>
        <div class="ds-list">
          <div class="ds-list-item">
            <span class="ds-avatar ds-avatar--sm">JD</span>
            <div class="ds-list-item__content">
              <div class="ds-list-item__title">Jane Doe</div>
              <div class="ds-list-item__subtitle">Admin</div>
            </div>
            <span class="ds-badge ds-badge--info">New</span>
          </div>
        </div>
        <table class="ds-table">
          <thead class="ds-thead">
            <tr class="ds-tr">
              <th class="ds-th">Name</th>
              <th class="ds-th">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="ds-tr">
              <td class="ds-td">Project A</td>
              <td class="ds-td"><span class="ds-badge ds-badge--success">Active</span></td>
            </tr>
          </tbody>
        </table>
        <nav class="ds-pagination" aria-label="Pagination">
          <button class="ds-page" aria-label="Previous">Prev</button>
          <button class="ds-page" data-state="active">1</button>
          <button class="ds-page">2</button>
          <button class="ds-page" aria-label="Next">Next</button>
        </nav>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Navigation</h2>
        <nav class="ds-breadcrumbs" aria-label="Breadcrumb">
          <a class="ds-breadcrumbs__item" href="#">Home</a>
          <span class="ds-breadcrumbs__separator">/</span>
          <a class="ds-breadcrumbs__item" href="#">Library</a>
          <span class="ds-breadcrumbs__separator">/</span>
          <span class="ds-breadcrumbs__item" aria-current="page">Data</span>
        </nav>
        <div class="ds-bottom-nav" style="position: relative">
          <div class="ds-bottom-nav__list">
            <button class="ds-bottom-nav__item" data-state="active">Home</button>
            <button class="ds-bottom-nav__item">Search</button>
            <button class="ds-bottom-nav__item">Profile</button>
          </div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Advanced Inputs</h2>
        <div class="ds-slider__labels">
          <span>0</span>
          <span>100</span>
        </div>
        <div class="ds-slider" ref="sliderRef" data-ds-slider>
          <div class="ds-slider__track">
            <div class="ds-slider__range" data-ds-slider-range></div>
          </div>
          <div class="ds-slider__tooltip" data-ds-slider-tooltip></div>
          <div class="ds-slider__thumb" data-ds-slider-thumb style="width: 16px; height: 16px;"></div>
        </div>
        <div class="ds-slider__labels">
          <span>0</span>
          <span>100</span>
        </div>
        <div class="ds-slider ds-slider--range" ref="sliderRangeRef" data-ds-slider>
          <div class="ds-slider__track"></div>
          <div class="ds-slider__range" data-ds-slider-range></div>
          <div class="ds-slider__tooltip" data-ds-slider-tooltip-start></div>
          <div class="ds-slider__tooltip" data-ds-slider-tooltip-end></div>
          <div class="ds-slider__thumb ds-slider__thumb--range" data-ds-slider-thumb-start
            style="width: 16px; height: 16px;"></div>
          <div class="ds-slider__thumb ds-slider__thumb--range" data-ds-slider-thumb-end
            style="width: 16px; height: 16px;"></div>
        </div>
        <div class="ds-autocomplete" ref="autocompleteRef">
          <input class="ds-input" placeholder="Search..." data-ds-autocomplete-input />
          <div class="ds-autocomplete__list" data-ds-autocomplete-list>
            <button class="ds-autocomplete__item" data-ds-autocomplete-item>Option A</button>
            <button class="ds-autocomplete__item" data-ds-autocomplete-item>Option B</button>
            <button class="ds-autocomplete__item" data-ds-autocomplete-item>Option C</button>
          </div>
        </div>
      </section>

      <section class="ds-card ds-stack-3 ds-anim-fade-in">
        <h2 class="ds-h4">Feedback</h2>
        <div class="ds-alert ds-alert--success">
          <span class="ds-alert__icon">✓</span>
          <div>Success message</div>
        </div>
        <div class="ds-progress-circular" aria-label="Loading">
          <span class="ds-progress-circular__ring"></span>
          <span class="ds-progress-circular__value"></span>
        </div>
        <div class="ds-skeleton" style="height: 16px; width: 160px;"></div>
      </section>
    </div>
    <template v-if="showDialog">
      <div class="ds-modal-backdrop" ref="backdropRef"></div>
      <div class="ds-modal" ref="dialogRef">
        <div class="ds-modal-header">Confirm</div>
        <div class="ds-modal-body">Are you sure you want to continue?</div>
        <div class="ds-modal-footer">
          <button class="ds-btn ds-btn--secondary ds-btn--md" @click="closeDialog">Cancel</button>
          <button class="ds-btn ds-btn--primary ds-btn--md" @click="closeDialog">Confirm</button>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import { createApiClient } from "@mfe-sols/data-access";
import { getSharedValue, setSharedValue, subscribeSharedValue } from "@mfe-sols/contracts";
import {
  createToast,
  defineDesignSystem,
  ensureTokens,
  initAutocomplete,
  initDatagrid,
  mountEditor,
  initDateRangeDropdown,
  initDateRangeCalendar,
  initDateTimeDropdown,
  initDatepicker,
  initDatepickerDropdown,
  initDialog,
  initDropdown,
  initRangeSlider,
  initSelectMenu,
  initSlider,
  initTabs,
  initTooltip,
  initTreeView,
  sanitizeInlineHtml,
} from "@mfe-sols/ui-kit";
import { getStoredLocale, setLocale, t } from "@mfe-sols/i18n";

export default {
  data() {
    return {
      locale: "en",
      localeLabel: "Locale",
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL || "",
      apiStatus: "idle",
      sharedMessage: getSharedValue("shared:message", ""),
      unsubscribeShared: null,
      disposeTabs: null,
      disposeDatepicker: null,
      disposeDatepickerDropdown: null,
      disposeDatepickerRangeInline: null,
      disposeDateRangeDropdown: null,
      disposeDateTimeDropdown: null,
      disposeDatagrid: null,
      disposeTree: null,
      disposeDropdown: null,
      disposeTooltip: null,
      disposeDialog: null,
      disposeSlider: null,
      disposeRangeSlider: null,
      disposeAutocomplete: null,
      disposeSelectMenu: null,
      disposeSelectMenuMulti: null,
      disposePhoneSelect: null,
      disposeCurrencySelect: null,
      disposeEditor: null,
      showDialog: false,
      onLocaleChange: null,
      onLocaleStorage: null,
      phoneValue: "",
      phoneCountry: "+1",
      cardValue: "",
      cardCvc: "",
      quantityValue: 1,
      currencyValue: "",
      editorValue: "",
      editorSavedAt: "",
      showPassword: false,
      inlineEditorOpen: false,
      inlineEditorValue: "",
      inlineEditorLeft: 0,
      inlineEditorTop: 0,
      inlineEditorTarget: null,
      inlineEditorDispose: null,
      inlineEditorHover: false,
      inlineEditorHideTimer: null,
      inlineEditorMountRetries: 0,
      inlineEditorPointerDown: false,
      inlineEditorLastHover: 0,
      inlineEditorFocus: false,
      inlineEditorLastPointerX: 0,
      inlineEditorLastPointerY: 0,
      inlineEditorSelectionActive: false,
      inlineEditorTargetDisposers: [],
      inlineEditorPointerUpHandler: null,
    };
  },
  mounted() {
    defineDesignSystem({ tailwind: true });
    ensureTokens();
    const applyLocale = (next) => {
      const normalized = next === "vi" ? "vi" : "en";
      setLocale(normalized);
      this.locale = normalized;
      this.localeLabel = t("localeLabel");
      document.documentElement.setAttribute("lang", normalized);
    };
    applyLocale(getStoredLocale());
    this.onLocaleChange = (event) => {
      const detail = event?.detail || {};
      if (detail.locale) applyLocale(detail.locale);
    };
    this.onLocaleStorage = (event) => {
      if (event.key === "app-locale") {
        applyLocale(getStoredLocale());
      }
    };
    window.addEventListener("app-locale-change", this.onLocaleChange);
    window.addEventListener("storage", this.onLocaleStorage);
    if (this.apiBaseUrl) {
      const api = createApiClient({
        baseUrl: this.apiBaseUrl,
        storage: {
          getTokens: () => null,
          setTokens: () => undefined,
          clearTokens: () => undefined,
        },
      });
      api
        .get("/health")
        .then(() => {
          this.apiStatus = "ok";
        })
        .catch(() => {
          this.apiStatus = "error";
        });
    }
    this.unsubscribeShared = subscribeSharedValue("shared:message", (value) => {
      this.sharedMessage = value || "";
    });
    this.$nextTick(() => {
      if (this.$refs.tabsRef) {
        this.disposeTabs = initTabs(this.$refs.tabsRef, { activeValue: "overview" });
      }
      if (this.$refs.datagridRef) {
        this.disposeDatagrid = initDatagrid(this.$refs.datagridRef);
      }
      if (this.$refs.datepickerRef) {
        this.disposeDatepicker = initDatepicker(this.$refs.datepickerRef, {
          showMonthYearDropdown: true,
          monthFormat: 'short',
          locale: 'en-US',
        });
      }
      if (this.$refs.datepickerRangeInlineRef) {
        this.disposeDatepickerRangeInline = initDateRangeCalendar(this.$refs.datepickerRangeInlineRef, {
          showMonthYearDropdown: true,
          monthFormat: 'short',
          locale: 'en-US',
          initialStart: new Date(),
          initialEnd: new Date(new Date().setDate(new Date().getDate() + 4)),
        });
      }
      if (this.$refs.datepickerDropdownRef) {
        this.disposeDatepickerDropdown = initDatepickerDropdown(this.$refs.datepickerDropdownRef);
      }
      if (this.$refs.dateRangeDropdownRef) {
        this.disposeDateRangeDropdown = initDateRangeDropdown(this.$refs.dateRangeDropdownRef, {
          showMonthYearDropdown: true,
          monthFormat: 'short',
          enableTimeRange: true,
          timeStepMinutes: 15,
          locale: 'en-US',
        });
      }
      if (this.$refs.dateTimeDropdownRef) {
        this.disposeDateTimeDropdown = initDateTimeDropdown(this.$refs.dateTimeDropdownRef, {
          disabledWeekdays: [0, 6],
          locale: 'en-US',
        });
      }
      if (this.$refs.treeRef) {
        this.disposeTree = initTreeView(this.$refs.treeRef);
      }
      if (this.$refs.dropdownTriggerRef && this.$refs.dropdownContentRef) {
        this.disposeDropdown = initDropdown(this.$refs.dropdownTriggerRef, this.$refs.dropdownContentRef);
      }
      if (this.$refs.tooltipTriggerRef && this.$refs.tooltipRef) {
        this.disposeTooltip = initTooltip(this.$refs.tooltipTriggerRef, this.$refs.tooltipRef);
      }
      if (this.$refs.sliderRef) {
        this.disposeSlider = initSlider(this.$refs.sliderRef, { value: 40 });
      }
      if (this.$refs.sliderRangeRef) {
        this.disposeRangeSlider = initRangeSlider(this.$refs.sliderRangeRef, { minValue: 25, maxValue: 70 });
      }
      if (this.$refs.autocompleteRef) {
        this.disposeAutocomplete = initAutocomplete(this.$refs.autocompleteRef);
      }
      if (this.$refs.selectMenuRef) {
        this.disposeSelectMenu = initSelectMenu(this.$refs.selectMenuRef);
      }
      if (this.$refs.selectMenuMultiRef) {
        this.disposeSelectMenuMulti = initSelectMenu(this.$refs.selectMenuMultiRef);
      }
      if (this.$refs.phoneSelectRef) {
        this.disposePhoneSelect = initSelectMenu(this.$refs.phoneSelectRef, {
          onChange: (value) => {
            const next = Array.isArray(value) ? value[0] : value;
            this.phoneCountry = next || "+1";
          },
        });
      }
      if (this.$refs.currencySelectRef) {
        this.disposeCurrencySelect = initSelectMenu(this.$refs.currencySelectRef);
      }
      const editorShell = document.getElementById("playground-editor");
      if (editorShell) {
        this.disposeEditor = mountEditor(editorShell, {
          label: "Content",
          helper: "Rich text editor with typography, color, and layout controls.",
          placeholder: "Write something... (Markdown not required)",
          characterLimit: 800,
          toolbar: {
            variant: "full",
            items: [
              "undo",
              "redo",
              "bold",
              "italic",
              "underline",
              "link",
              "image",
              "imageUrl",
              "videoUrl",
              "fontSize",
              "highlight",
              "textColor",
              "quote",
              "code",
              "clear",
            ],
          },
          showGrid: true,
          showStatus: true,
          onChange: ({ html, markdown, text }) => {
            this.editorValue = html;
            console.log("[editor html]", html);
            console.log("[editor markdown]", markdown);
            console.log("[editor text]", text);
          },
        });
      }
      const inlineTargets = Array.from(document.querySelectorAll("[data-ds-inline-edit]"));
      inlineTargets.forEach((el) => {
        const onEnter = () => {
          if (this.inlineEditorOpen && this.inlineEditorTarget === el) return;
          this.openInlineEditor(el, false);
        };
        const onLeave = () => {
          this.scheduleInlineEditorHide();
        };
        const onClick = (event) => {
          event.preventDefault();
          this.openInlineEditor(el, true);
        };
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        el.addEventListener("click", onClick);
        this.inlineEditorTargetDisposers.push(() => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
          el.removeEventListener("click", onClick);
        });
      });
    });
  },
  beforeUnmount() {
    this.unsubscribeShared?.();
    this.disposeTabs?.();
    this.disposeDatepicker?.();
    this.disposeDatepickerDropdown?.();
    this.disposeDatepickerRangeInline?.();
    this.disposeDateRangeDropdown?.();
    this.disposeDateTimeDropdown?.();
    this.disposeDatagrid?.();
    this.disposeTree?.();
    this.disposeDropdown?.();
    this.disposeTooltip?.();
    this.disposeDialog?.();
    this.disposeSlider?.();
    this.disposeRangeSlider?.();
    this.disposeAutocomplete?.();
    this.disposeSelectMenu?.();
    this.disposeSelectMenuMulti?.();
    this.disposePhoneSelect?.();
    this.disposeCurrencySelect?.();
    this.disposeEditor?.();
    this.inlineEditorDispose?.();
    this.inlineEditorTargetDisposers.forEach((fn) => fn());
    this.inlineEditorTargetDisposers = [];
    if (this.inlineEditorHideTimer !== null) {
      window.clearTimeout(this.inlineEditorHideTimer);
      this.inlineEditorHideTimer = null;
    }
    if (this.inlineEditorPointerUpHandler) {
      window.removeEventListener("pointerup", this.inlineEditorPointerUpHandler);
      this.inlineEditorPointerUpHandler = null;
    }
    this.inlineEditorTarget = null;
    this.inlineEditorOpen = false;
    if (this.onLocaleChange) window.removeEventListener("app-locale-change", this.onLocaleChange);
    if (this.onLocaleStorage) window.removeEventListener("storage", this.onLocaleStorage);
    this.onLocaleChange = null;
    this.onLocaleStorage = null;
  },
  watch: {
    showDialog(next) {
      if (next) {
        this.$nextTick(() => {
          if (this.$refs.dialogRef) {
            this.disposeDialog = initDialog(this.$refs.dialogRef, this.$refs.backdropRef, {
              onClose: () => {
                this.showDialog = false;
              },
            });
          }
        });
      } else {
        this.disposeDialog?.();
      }
    },
  },
  methods: {
    updateShared() {
      const next = `Vue updated ${new Date().toISOString()}`;
      setSharedValue("shared:message", next);
      this.sharedMessage = next;
    },
    showToast() {
      createToast({
        title: "Saved",
        description: "Your changes were saved.",
        variant: "success",
      });
    },
    saveEditor() {
      const safeHtml = sanitizeInlineHtml(this.editorValue || "");
      console.log("[editor save sanitized]", safeHtml);
      this.editorSavedAt = new Date().toISOString();
    },
    formatPhone(raw) {
      const digits = raw.replace(/\D/g, "").slice(0, this.phoneCountry === "+1" ? 10 : 12);
      const p1 = digits.slice(0, 3);
      const p2 = digits.slice(3, 6);
      const p3 = digits.slice(6, 10);
      if (digits.length <= 3) return p1;
      if (digits.length <= 6) return `(${p1}) ${p2}`;
      return `(${p1}) ${p2}-${p3}`;
    },
    onPhoneInput(event) {
      this.phoneValue = this.formatPhone(event.target.value || "");
    },
    formatCard(raw) {
      const digits = raw.replace(/\D/g, "").slice(0, 16);
      const groups = digits.match(/.{1,4}/g) || [];
      return groups.join(" ");
    },
    onCardInput(event) {
      this.cardValue = this.formatCard(event.target.value || "");
    },
    onCvcInput(event) {
      this.cardCvc = (event.target.value || "").replace(/\D/g, "").slice(0, 4);
    },
    increaseQuantity() {
      this.quantityValue += 1;
    },
    decreaseQuantity() {
      this.quantityValue = Math.max(0, this.quantityValue - 1);
    },
    onQuantityInput(event) {
      const next = Number(String(event.target.value || "").replace(/\D/g, ""));
      this.quantityValue = Number.isNaN(next) ? 0 : next;
    },
    formatCurrency(raw) {
      const cleaned = raw.replace(/[^\d.]/g, "");
      const parts = cleaned.split(".");
      const whole = (parts[0] || "").slice(0, 9);
      const fraction = (parts[1] || "").slice(0, 2);
      return fraction.length ? `${whole}.${fraction}` : whole;
    },
    onCurrencyInput(event) {
      this.currencyValue = this.formatCurrency(event.target.value || "");
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    openInlineEditor(target, focus) {
      this.resetInlineEditorInteraction();
      this.inlineEditorTarget = target;
      this.inlineEditorValue = sanitizeInlineHtml(target.innerHTML || "");
      const rect = target.getBoundingClientRect();
      const left = Math.min(Math.max(16, rect.left + window.scrollX), window.innerWidth - 360);
      const top = rect.bottom + window.scrollY + 8;
      this.inlineEditorLeft = left;
      this.inlineEditorTop = top;
      this.inlineEditorOpen = true;
      this.inlineEditorMountRetries = 0;
      if (this.inlineEditorHideTimer !== null) {
        window.clearTimeout(this.inlineEditorHideTimer);
        this.inlineEditorHideTimer = null;
      }
      // Use this.$nextTick to ensure DOM is rendered first
      this.$nextTick(() => this.ensureInlineEditorMounted(focus));
    },
    resetInlineEditorInteraction() {
      this.inlineEditorHover = false;
      this.inlineEditorPointerDown = false;
      this.inlineEditorFocus = false;
      this.inlineEditorSelectionActive = false;
      this.inlineEditorLastHover = 0;
      if (this.inlineEditorHideTimer !== null) {
        window.clearTimeout(this.inlineEditorHideTimer);
        this.inlineEditorHideTimer = null;
      }
    },
    scheduleInlineEditorHide() {
      if (this.inlineEditorHover || this.inlineEditorPointerDown || this.inlineEditorFocus || this.inlineEditorSelectionActive) {
        return;
      }
      if (this.inlineEditorHideTimer !== null) {
        window.clearTimeout(this.inlineEditorHideTimer);
      }
      this.inlineEditorHideTimer = window.setTimeout(() => {
        if (
          !this.inlineEditorHover &&
          !this.inlineEditorPointerDown &&
          !this.inlineEditorFocus &&
          !this.inlineEditorSelectionActive
        ) {
          this.inlineEditorDispose?.();
          this.inlineEditorDispose = null;
          this.inlineEditorOpen = false;
          this.inlineEditorTarget = null;
          this.resetInlineEditorInteraction();
        }
      }, 120);
    },
    onInlineEditorEnter() {
      this.inlineEditorLastHover = Date.now();
      this.inlineEditorHover = true;
      if (this.inlineEditorHideTimer !== null) {
        window.clearTimeout(this.inlineEditorHideTimer);
        this.inlineEditorHideTimer = null;
      }
    },
    onInlineEditorLeave() {
      if (this.inlineEditorPointerDown || this.inlineEditorSelectionActive) return;
      this.inlineEditorHover = false;
      this.scheduleInlineEditorHide();
    },
    onInlineEditorPointerDown() {
      if (this.inlineEditorPointerUpHandler) {
        window.removeEventListener("pointerup", this.inlineEditorPointerUpHandler);
        this.inlineEditorPointerUpHandler = null;
      }
      this.inlineEditorPointerDown = true;
      this.inlineEditorHover = true;
      this.inlineEditorSelectionActive = true;
      if (this.inlineEditorHideTimer !== null) {
        window.clearTimeout(this.inlineEditorHideTimer);
        this.inlineEditorHideTimer = null;
      }
      const onPointerUp = () => {
        this.inlineEditorPointerDown = false;
        const editor = document.querySelector(".ds-inline-editor [data-ds-editor-content]");
        if (editor) {
          const selection = window.getSelection();
          this.inlineEditorSelectionActive = (selection && selection.toString().length > 0) || false;
        }
        window.removeEventListener("pointerup", onPointerUp);
        const host = document.querySelector(".ds-inline-editor");
        const el = document.elementFromPoint(this.inlineEditorLastPointerX, this.inlineEditorLastPointerY);
        // Set hover based on whether pointer is inside editor element
        this.inlineEditorHover = !!(host && el && host.contains(el));
        if (this.inlineEditorPointerUpHandler === onPointerUp) {
          this.inlineEditorPointerUpHandler = null;
        }
        if (!this.inlineEditorSelectionActive) {
          this.scheduleInlineEditorHide();
        }
      };
      this.inlineEditorPointerUpHandler = onPointerUp;
      window.addEventListener("pointerup", onPointerUp, { once: true });
    },
    onInlineEditorPointerMove(event) {
      this.inlineEditorLastPointerX = event.clientX;
      this.inlineEditorLastPointerY = event.clientY;
    },
    onInlineEditorFocusIn() {
      this.inlineEditorFocus = true;
      if (this.inlineEditorHideTimer !== null) {
        window.clearTimeout(this.inlineEditorHideTimer);
        this.inlineEditorHideTimer = null;
      }
    },
    onInlineEditorFocusOut(event) {
      const next = event.relatedTarget || null;
      if (next) {
        const host = document.querySelector(".ds-inline-editor");
        if (host && host.contains(next)) {
          return;
        }
      }
      this.inlineEditorFocus = false;
      this.inlineEditorSelectionActive = false;
      this.scheduleInlineEditorHide();
    },
    ensureInlineEditorMounted(focus) {
      if (!this.inlineEditorOpen) return;
      const host = document.getElementById("inline-richtext-editor");
      if (!host) {
        if (this.inlineEditorMountRetries < 5) {
          this.inlineEditorMountRetries += 1;
          requestAnimationFrame(() => this.ensureInlineEditorMounted(focus));
        }
        return;
      }
      this.mountInlineEditor(focus);
    },
    mountInlineEditor(focus) {
      const host = document.getElementById("inline-richtext-editor");
      if (!host) return;
      if (this.inlineEditorDispose) {
        this.inlineEditorDispose();
        this.inlineEditorDispose = null;
      }
      this.inlineEditorDispose = mountEditor(host, {
        placeholder: "Edit text...",
        characterLimit: 400,
        toolbar: {
          variant: "full",
          items: ["bold", "italic", "underline", "fontSize", "textColor", "clear"],
        },
        showGrid: false,
        showStatus: false,
        onChange: ({ html }) => {
          this.inlineEditorValue = html;
        },
      });
      // Wait for DOM to be ready before setting content and selecting
      queueMicrotask(() => {
        const content = host.querySelector("[data-ds-editor-content]");
        if (content) {
          content.innerHTML = this.inlineEditorValue || "";
          if (focus) {
            content.focus();
            // Auto-select all text for easy editing
            requestAnimationFrame(() => {
              const selection = window.getSelection();
              if (selection && content.firstChild) {
                const range = document.createRange();
                range.selectNodeContents(content);
                selection.removeAllRanges();
                selection.addRange(range);
              }
            });
          }
        }
      });
    },
    saveInlineEditor() {
      // Read the actual edited content directly from the editor DOM
      const host = document.getElementById("inline-richtext-editor");
      const content = host?.querySelector("[data-ds-editor-content]");
      const updatedHtml = content?.innerHTML ?? this.inlineEditorValue;
      const safeHtml = sanitizeInlineHtml(updatedHtml);
      
      if (this.inlineEditorTarget) {
        this.inlineEditorTarget.innerHTML = safeHtml;
      }
      this.inlineEditorDispose?.();
      this.inlineEditorDispose = null;
      this.inlineEditorOpen = false;
      this.inlineEditorTarget = null;
      this.resetInlineEditorInteraction();
    },
    cancelInlineEditor() {
      this.inlineEditorDispose?.();
      this.inlineEditorDispose = null;
      this.inlineEditorOpen = false;
      this.inlineEditorTarget = null;
      this.resetInlineEditorInteraction();
    },
  },
};
</script>

<style scoped>
.mfe-tree {
  padding: 10px;
  border-radius: 16px;
}

.mfe-tree .ds-tree__item {
  display: grid;
  grid-template-columns: 24px 26px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: transparent;
}

.mfe-tree .ds-tree__item:hover {
  border-color: var(--color-border);
  background: color-mix(in srgb, var(--color-surface-muted) 70%, transparent);
}

.mfe-tree .ds-tree__item[data-state="open"] {
  border-color: var(--color-border);
  background: color-mix(in srgb, var(--color-surface-muted) 75%, transparent);
}

.mfe-tree .ds-tree__toggle {
  margin-left: 0;
  width: 24px;
  height: 24px;
  border-radius: 8px;
}

.mfe-tree .ds-tree__children {
  grid-column: 1 / -1;
  margin: 6px 0 2px 14px;
  padding-left: 12px;
  border-left-style: dashed;
  border-left-color: var(--color-border);
  border-left-width: 1px;
  display: block;
  width: auto;
}

.mfe-tree .ds-tree__children > .ds-tree__item + .ds-tree__item {
  margin-top: 10px;
}

.mfe-tree > .ds-tree__item > .ds-tree__children > .ds-tree__item + .ds-tree__item {
  margin-top: 14px;
}

.mfe-tree .ds-tree__children[hidden] {
  display: none !important;
}

.mfe-tree__content {
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mfe-tree__label {
  font-weight: 600;
  line-height: 1.25;
}

.mfe-tree__meta {
  font-size: 12px;
  color: var(--color-text-muted);
  line-height: 1.3;
}

.mfe-tree__node-icon {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: color-mix(in srgb, var(--color-primary-700) 90%, var(--color-text) 10%);
  background: color-mix(in srgb, var(--color-primary-100) 65%, var(--color-surface) 35%);
  border: 1px solid var(--color-border);
  flex-shrink: 0;
}

.mfe-tree__node-icon--leaf {
  width: 24px;
  height: 24px;
  border-radius: 7px;
}

.mfe-tree__pill {
  align-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  min-width: 20px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-muted);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  margin-left: 8px;
}

.mfe-tree__spacer {
  width: 24px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .mfe-tree .ds-tree__item {
    grid-template-columns: 22px 24px minmax(0, 1fr);
    padding: 8px 9px;
    gap: 8px;
  }

  .mfe-tree__meta {
    font-size: 11px;
  }

  .mfe-tree__pill {
    display: none;
  }

  .mfe-tree .ds-tree__children > .ds-tree__item + .ds-tree__item {
    margin-top: 8px;
  }

  .mfe-tree > .ds-tree__item > .ds-tree__children > .ds-tree__item + .ds-tree__item {
    margin-top: 10px;
  }
}

.ds-inline-edit {
  position: relative;
  border-radius: var(--radius-md);
  padding: 2px 6px;
  transition: background-color 150ms ease;
  cursor: text;
}

.ds-inline-edit:hover {
  background-color: var(--color-surface-muted);
}

.ds-inline-editor {
  position: absolute;
  z-index: 40;
  width: min(360px, calc(100vw - 32px));
  min-width: 300px;
  max-width: min(720px, calc(100vw - 32px));
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  padding: 8px 12px 12px 8px;
  box-shadow: var(--ds-shadow-2);
  resize: both;
  overflow: auto;
}

.ds-inline-editor__textarea {
  min-height: 96px;
}
</style>
