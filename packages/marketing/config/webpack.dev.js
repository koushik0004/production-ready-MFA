const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { merge } = require("webpack-merge");

const webpackCommon = require("./webpack.common");

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
        "./Marketing": "./src/bootstrap",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(webpackCommon, webpackDev);
