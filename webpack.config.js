const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.js',
    hello: {
      dependOn: 'index',
      import: './src/components/Hello.js',
    },
  },  // files we will bundle
  output: {
    path: path.join(__dirname, "build"), // build results file
    filename: "[name].bundle.js"
  },
  mode: process.env.NODE_ENV || "development", // production or development
  resolve: { 
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
