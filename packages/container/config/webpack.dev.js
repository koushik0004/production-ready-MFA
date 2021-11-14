const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const commonWebpack = require("./webpack.common");
const packageJSON = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 4001,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:4010/remoteEntryMarketing.js",
      },
      // shared: {
      //   react: { singleton: true },
      //   "react-dom": { singleton: true },
      // },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonWebpack, devConfig);
