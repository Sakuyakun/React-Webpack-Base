const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

// 抽离css样式
const extractPlugin = new ExtractTextPlugin({
  filename: '[name].[chunkhash].css',  //生成文件的文件名
  ignoreOrder: true, //禁用顺序检查
  allChunks: true
})

module.exports = {
    entry: {
      app: path.resolve(__dirname, './src/index.jsx'),
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
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[chunkhash].js',
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
                  Composing: true,
                  importLoaders: 2
                },
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
      new Clean(path.resolve(__dirname, './dist')),
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
      // new webpack.DefinePlugin({
      //   'process.env': {
      //     'NODE_ENV': JSON.stringify('production')
      //   }
      // }),
      // new UglifyJSPlugin({
      //   compress: {
      //     warnings: false,
      //     drop_console: true
      //   },
      //   beautify: false,
      //   except: ['$super', '$', 'exports', 'require']
      // }),

      //TODO: manifest文件提取出错
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: "manifest",
      //   chunks: ["vendor"],
      //   minChunks: Infinity
      // }),
      // new webpack.optimize.ModuleConcatenationPlugin(),
      new DashboardPlugin()
    ]
};
