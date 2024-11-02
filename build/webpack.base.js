const path = require("path");
const webpack = require("webpack");
const pkg = require("../package.json");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=8192",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue: "vue/dist/vue.esm.js",
      "@": path.join(__dirname, "..", "src"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.VERSION": `'${pkg.version}'`,
    }),
    new VueLoaderPlugin(),
  ],
};
