const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devServer: {
    host: "localhost",
    port: "3000",
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
    filename: "bundle.min.js",
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
    })
  ]
};
