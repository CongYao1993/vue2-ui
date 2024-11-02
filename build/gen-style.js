const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const components = require("./components.json");

function buildCss(cb) {
  gulp
    .src("../packages/theme-chalk/index.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename("vue2-ui.css"))
    .pipe(gulp.dest("../lib/styles"));
  cb();
}

function buildSeperateCss(cb) {
  Object.keys(components).forEach((compName) => {
    gulp
      .src(`../packages/theme-chalk/${compName}.scss`)
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCSS())
      .pipe(rename(`${compName}.css`))
      .pipe(gulp.dest("../lib/styles"));
  });

  cb();
}

exports.default = gulp.series(buildCss, buildSeperateCss);
