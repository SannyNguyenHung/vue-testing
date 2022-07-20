const { startDevServer } = require("@cypress/webpack-dev-server");
const baseWebpackConfig = require("@vue/cli-service/webpack.config.js");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

const webpackConfig = {
  ...webpackPreprocessor.defaultOptions.webpackOptions,
  resolve: baseWebpackConfig.resolve,
  module: {
    rules: baseWebpackConfig.module.rules
  },
  plugins: baseWebpackConfig.plugins
}

module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    startDevServer({
      options,
      webpackConfig,
    });
  });

  const publicPath = ' ';
  let outputOptions;
  Object.defineProperty(webpackConfig, 'output', {
    get: () => {
      return { ...outputOptions, publicPath };
    },
    set: function (x) {
      outputOptions = x;
    },
  });

  on(
    "file:preprocessor",
    webpackPreprocessor({ webpackOptions: webpackConfig, watchOptions: {} })
  );

  const environment = config.env.environment.toLowerCase();
  const variant = config.env.variant.toLowerCase();

  const testsToIgnore = variant === "cem" ? "plg" : "cem";
  config.ignoreTestFiles = [
    config.ignoreTestFiles,
    `**/${testsToIgnore}.spec.js`,
  ];

  config.env = {
    ...config.env,
    ...require(`../fixtures/accounts/${environment}/${variant}`),
  };

  return config;
};