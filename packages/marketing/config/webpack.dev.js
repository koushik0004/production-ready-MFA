const { ModuleFederationPlugin } = require("webpack").container;
const { merge } = require("webpack-merge");

const webpackCommon = require("./webpack.common");
const packageJSON = require("../package.json");

const webpackDev = {
  mode: "development",
  devServer: {
    port: 4010,
    historyApiFallback: {
      index: "index.html",
    },
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

module.exports = merge(webpackCommon, webpackDev);
