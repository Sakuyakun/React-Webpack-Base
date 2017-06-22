const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
// const WebpackChunkHash = require("webpack-chunk-hash");

const DashboardPlugin = require('webpack-dashboard/plugin');
const Clean = require('clean-webpack-plugin');

// 抽离CSS
const extractPlugin = new ExtractTextPlugin({
  filename: '[name].[chunkhash].css',
  ignoreOrder: true, //禁用顺序检查
  allChunks: true
})

module.exports = {
    entry: {
      app: path.join(__dirname, 'src/index.jsx'),
      vendor: [
        'react',
        'react-dom',
        'redux',
        'react-redux',
        'react-router-dom',
        'classnames',
        'moment'
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].js"
    },
    resolve: { extensions: ['jsx', '.js', '.json', '.scss'] },
    module: {
      rules: [
        {
          loader: 'eslint-loader',
          test: /\.(js|jsx)$/,
          enforce: "pre",
          exclude: /node_modules/,
          options: {
            emitWarning: true,
          },
        },
        // sass
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, './src')],
          use: extractPlugin.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                  Composing: true,
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              {loader: "sass-loader"}
            ],
            fallback: 'style-loader'
          })
        },
        // jsx
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          include: [path.resolve(__dirname, './src')],
        },
        {
          test: /\.(png|jpg|gif|jpeg)$/,
          loader: 'url-loader?limit=10000&name=assets/[name].[ext]'
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.json?$/,
          loader: 'json'
        }
      ]
    },
    plugins: [
      extractPlugin,
      new Clean(path.join(__dirname, 'dist')),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new HtmlWebpackPlugin({
        // filename: 'index-[hash].html',
        template: './src/template/index.html',
        minify: {
          // https://github.com/kangax/html-minifier
          removeComments: true,
          collapseWhitespace: false,
          removeAttributeQuotes: true
        }
      }),
      new UglifyJSPlugin({
        compress: {
          warnings: false,
          drop_console: true
        },
        beautify: false,
        except: ['$super', '$', 'exports', 'require']
      }),

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
      // new webpack.optimize.ModuleConcatenationPlugin(),
      // new DashboardPlugin(),
    ]
};
