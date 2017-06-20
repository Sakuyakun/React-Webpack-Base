const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const publicPath = 'http://localhost:3004/';

module.exports = {
    devtool: 'inline-source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?' + publicPath,
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    resolve: { extensions: ['jsx', '.js', '.json', '.scss'] },
    plugins: [
      // new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"',
      }),
      new DashboardPlugin()
    ],
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
                Composing: true,
                sourceMap: true,
                importLoaders: 2
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        },
        // jsx
        {
          test: /\.(js|jsx)$/,
          include: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [["es2015", {"modules": false}], "stage-0", "react"],
              plugins: ["transform-runtime", "react-hot-loader/babel", "transform-class-properties", "transform-decorators-legacy"]
            }
          }
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
    devServer: {
      host: 'localhost',
      port: 3004,
      historyApiFallback: true,
      hot: true,
  },
};
