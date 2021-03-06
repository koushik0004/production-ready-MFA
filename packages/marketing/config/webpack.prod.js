const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;

const webpackCommon = require("./webpack.common");
const packageJSON = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntryMarketing.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(webpackCommon, prodConfig);
