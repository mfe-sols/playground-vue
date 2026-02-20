const path = require("path");
try {
  require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
} catch (error) {
  if (!error || error.code !== "MODULE_NOT_FOUND") {
    throw error;
  }
}

module.exports = {
  lintOnSave: false,
  transpileDependencies: ["@mfe-sols/ui-kit", "@mfe-sols/i18n"],
  configureWebpack: {
    performance: {
      hints: false,
    },
    plugins: [
      new (require("webpack")).DefinePlugin({
        "process.env.VUE_APP_API_BASE_URL": JSON.stringify(process.env.API_BASE_URL || ""),
        "process.env.VUE_APP_AUTH_BASE_URL": JSON.stringify(process.env.AUTH_BASE_URL || ""),
      }),
    ],
    output: {
      filename: "playground-vue.js",
      library: "playgroundVue",
      libraryTarget: "umd",
      iife: true,
    },
  },
  devServer: {
    port: 9006,
    host: "localhost",
    client: {
      webSocketURL: "ws://localhost:9006/ws",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
