const path = require("path");

module.exports = {
  entry: "./pages/index.tsx",
  output: {
    path: path.join(__dirname, "public/dist"),
    filename: "./main.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
    overlay: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
  mode: "development",
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1500,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
