const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "__tests__/cypress/*.spec.js",
    baseUrl: "http://localhost:8080",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },

  component: {
    specPattern: "__tests__/cypress/*.spec.js",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
