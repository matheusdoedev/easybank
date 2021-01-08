var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var htmlmin = require("gulp-htmlmin");

gulp.task("styles", () => {
  return gulp
    .src("src/styles/main.css")
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/styles"));
});

gulp.task("pages", () => {
  return gulp
    .src("src/index.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("dist"));
});
