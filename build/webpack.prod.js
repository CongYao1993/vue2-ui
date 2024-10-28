const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
process.env.NODE_ENV = "production";

module.exports = merge(webpackBaseConfig, {
  devtool: "source-map",
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "../src/index.js"), // 将src下的index.js 作为入口点
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/lib/",
    filename: "vue2-ui.min.js",
    library: "vue2-ui",
    libraryTarget: "umd",
    umdNamedDefine: true,
    // // 将 bundle 中的 window 对象替换为 this，不然会报 window is not defined
    // globalObject: "this",
    // // 没有该配置项，组件会挂载到 default 属性下，需要 comp.default.xxx 这样使用，不方便
    // libraryExport: "default",
  },
  externals: {
    // 外部化对vue的依赖
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
  ],
});
