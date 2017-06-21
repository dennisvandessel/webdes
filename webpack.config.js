
var path = require("path");
var webpack = require("webpack");
var extractTextPlugin = require("extract-text-webpack-plugin");
var webpackBuildNotifier = require("webpack-notifier");

module.exports = {  
  entry: {
    bundle: "./app/main.ts"
 
          
  },
  output: {
    path: path.resolve("dist"),
    filename: 'bundle.js'
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),

    new extractTextPlugin("styles.css"),
    new webpackBuildNotifier({alwaysNotify : true})
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.css$/, loader: extractTextPlugin.extract("style-loader", ["css-loader?sourceMap","autoprefixer-loader"])},
      { test: /\.scss$/, loader: extractTextPlugin.extract("style-loader", ["css-loader?sourceMap","autoprefixer-loader", "sass?sourceMap"]) },
      { test: /\.png|gif|jpg|eot|ttf|woff|otf$/, loader: "url-loader?limit=1000" },
      { test: /\.svg/, loader: 'svg-url-loader?limit=1000' }

    ],
  }
  


}