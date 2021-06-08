const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"), // files we will bundle
  output: {
    path: path.join(__dirname, "build"), // build results file
    filename: "index.bundle.js"
  },
  mode: process.env.NODE_ENV || "development", // production or development
  resolve: { 
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
