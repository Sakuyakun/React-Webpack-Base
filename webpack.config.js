const path = require('path');
const webpack = require('webpack');
const node_modules = path.resolve(__dirname, 'node_modules');
const env = process.env.NODE_ENV

let babelLoaderOptions = {}
if (env === 'development') {
  // 开发环境使用下面babel配置项 部署环境使用.babelrc文件配置项
  babelLoaderOptions = {
    babelrc: false,
    presets: [["es2015", {"modules": false}], "stage-0", "react"],
    plugins: ["transform-runtime", "react-hot-loader/babel", "transform-class-properties", "transform-decorators-legacy"]
  }
}

const baseConfig = {
  resolve: { extensions: ['.jsx', '.js', '.json', '.scss'] },
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
        include: path.resolve(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              Composing: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      // jsx
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src'),
        use: {
          loader: 'babel-loader',
          options: babelLoaderOptions
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        use: ['url-loader']
      },
      {
        test: /\.(png|jpg)$/,
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
}

module.exports = baseConfig
