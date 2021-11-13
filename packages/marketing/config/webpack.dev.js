const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(webpackCommon, webpackDev);
