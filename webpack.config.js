const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  devServer: {
    host: "localhost",
    port: "3000",
    proxy: [
      {
        context: ["/article", "/api"],
        target: "http://localhost:8000"
      }
    ],
    hot: true,
    overlay: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true
  },
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle-[hash].min.js",
    libraryTarget: "var",
    library: "Client"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      hash: true,
      xhtml: true
    }),
    new WorkboxPlugin.GenerateSW()
  ]
};
