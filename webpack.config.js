const path = require("path");
const webpack = require("webpack");
const node_modules = path.resolve(__dirname, "node_modules");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV;

let scssRule = null;
const extractPlugin = new ExtractTextPlugin({
  filename: "[name].[chunkhash].css",
  ignoreOrder: true, //禁用顺序检查
  allChunks: true
});

if (env === 'development') {
  scssRule = [{
    test: /\.scss$/,
    include: path.resolve(__dirname, "src"),
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
      { loader:"postcss-loader", options: { sourceMap: true } },
      { loader:"sass-loader", options: { sourceMap: true } }
    ]
  }]
} else if (env === 'production') {
  // 部署环境 分离样式
  scssRule = [{
    test: /\.scss$/,
    include: path.resolve(__dirname, "src"),
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
  }];
}

const baseConfig = {
  resolve: { extensions: [".jsx", ".js", ".json", ".scss"] },
  module: {
    rules: [
      ...scssRule,
      {
        loader: "eslint-loader",
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      },
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
        loader: "url-loader?limit=1000&name=assets/[name].[ext]"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader?classPrefix"
      },
      {
        test: /\.json?$/,
        loader: "json"
      }
    ]
  }
};

module.exports = {
  baseConfig,
  extractPlugin
};
