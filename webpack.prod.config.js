const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const baseConfig = require("./webpack.config.js");

// const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
// const WebpackChunkHash = require("webpack-chunk-hash");

const DashboardPlugin = require("webpack-dashboard/plugin");
const Clean = require("clean-webpack-plugin");

// 提取CSS
const extractPlugin = new ExtractTextPlugin({
  filename: "[name].[chunkhash].css",
  ignoreOrder: true, //禁用顺序检查
  allChunks: true
});
const scssRule = {
  test: /\.scss$/,
  include: path.resolve(__dirname, "./src"),
  use: extractPlugin.extract({
    use: [
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
      { loader: "postcss-loader" },
      { loader: "sass-loader" }
    ],
    fallback: "style-loader"
  })
};
baseConfig.module.rules.push(scssRule);

const prodConfig = {
  entry: {
    app: path.join(__dirname, "src/index.jsx"),
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-redux",
      "react-router-dom",
      "classnames",
      "moment"
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  plugins: [
    extractPlugin,
    new Clean(path.join(__dirname, "dist")),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      // filename: 'index-[hash].html',
      template: "./src/template/index.html",
      minify: {
        // https://github.com/kangax/html-minifier
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: true
      },
      favicon: path.resolve(__dirname, 'src/assets/images/favicon.ico')
    }),
    new UglifyJSPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      beautify: false,
      except: ["$super", "$", "exports", "require"]
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new DashboardPlugin()

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ["vendor", "manifest"], // vendor libs + extracted manifest
    //   minChunks: Infinity,
    // }),
    // new webpack.HashedModuleIdsPlugin(),
    // new WebpackChunkHash(),
    // new ChunkManifestPlugin({
    //   filename: "chunk-manifest.json",
    //   manifestVariable: "webpackManifest",
    //   inlineManifest: true
    // }),
  ]
};

module.exports = Object.assign(baseConfig, prodConfig);
