const path = require("path");
const HWP = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: "/node_modules"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules"
      }
    ]
  },
  plugins: [new HWP({ template: path.join(__dirname, "/public/index.html") })]
};
