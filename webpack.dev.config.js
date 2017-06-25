const path = require("path");
const webpack = require("webpack");
const DashboardPlugin = require("webpack-dashboard/plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const publicPath = "http://localhost:3004/";
const baseConfig = require("./webpack.config.js");

// 提取CSS
const extractPlugin = new ExtractTextPlugin({
  filename: "[name].[chunkhash].css",
  ignoreOrder: true, //禁用顺序检查
  allChunks: true
});
const scssRule = {
  test: /\.scss$/,
  include: path.resolve(__dirname, "./src"),
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true,
        localIdentName: "[name]__[local]--[hash:base64:5]",
        Composing: true,
        sourceMap: true,
        importLoaders: 1
      }
    },
    "postcss-loader",
    "sass-loader"
  ]
};
baseConfig.module.rules.push(scssRule);

const devConfig = {
  devtool: "inline-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?" + publicPath,
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new DashboardPlugin()
  ],
  devServer: {
    host: "localhost",
    port: 3004,
    historyApiFallback: true,
    hot: true,
    overlay: {
      errors: true,
      warnings: true
    }
  }
};

module.exports = Object.assign(baseConfig, devConfig);
