const path = require("path");
const webpack = require("webpack");
const node_modules = path.resolve(__dirname, "node_modules");
const env = process.env.NODE_ENV;

const baseConfig = {
  resolve: { extensions: [".jsx", ".js", ".json", ".scss"] },
  module: {
    rules: [
      {
        loader: "eslint-loader",
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      },
      // jsx
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "./src"),
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        use: ["url-loader"]
      },
      {
        test: /\.(png|jpg|ico)$/,
        loader: "url-loader?limit=10000&name=assets/[name].[ext]"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.json?$/,
        loader: "json"
      }
    ]
  }
};

module.exports = baseConfig;
