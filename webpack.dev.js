const { merge } = require("webpack-merge");
const Dotenv = require('dotenv-webpack');
const common = require("./webpack.common.js");

// console.debug(typeof require("dotenv").config({ path: `${__dirname}/.env.development` }).parsed)

module.exports = merge(common, {
  mode: "development",
  //  devtool: 'inline-source-map',
  devServer: {
    static: "./dist",
  },
  plugins: [
    new Dotenv({ path: `${__dirname}/.env.development` }),
    // new DefinePlugin({
    //   'process.env':
    // }),
  ],
});
