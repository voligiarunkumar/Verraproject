const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const pacakgejson=require('../package.json');
const commonConfig = require("./webpack.common");
const devConfig = {
  mode: "development",
  output:{
    publicPath:'http://localhost:8084/'
  },
  devServer: {
    port: 8084,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shipping",
      filename: "remoteEntry.js",
      exposes: {
        "./ShippingApp": "./src/bootstrap",
      },
      shared:pacakgejson.dependencies,//removes duplicate loading of dependencies
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
