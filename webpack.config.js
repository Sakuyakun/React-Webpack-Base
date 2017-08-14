const path = require("path");
const webpack = require("webpack");
const node_modules = path.resolve(__dirname, "node_modules");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV;

const extractPlugin = new ExtractTextPlugin({
  filename: "[name].[chunkhash].css",
  ignoreOrder: true, //禁用顺序检查
  allChunks: true
});

let cssrule = null

// 开发环境 不分离css文件
const dev_cssRule = [
  {
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
  },
  {
    test: /\.css$/,
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
    ]
  }
]

// 开发环境 分离css文件
const prod_cssRule = [
  {
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
  },
  {
    test: /\.css$/,
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
      ],
      fallback: "style-loader"
    })
  },
]

env === "development" ? (cssrule = dev_cssRule) : (cssrule = prod_cssRule)

const baseConfig = {
  resolve: { 
    extensions: [".jsx", ".js", ".json", ".scss", ".css"]
  },
  module: {
    rules: [
      ...cssrule,
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
          loader: "babel-loader?cacheDirectory=true",
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
}

module.exports = {
  baseConfig,
  extractPlugin
};
