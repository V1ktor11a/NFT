// Sass configuration
const gulp = require("gulp");
const bulk = require("gulp-sass-bulk-importer");
const map = require("gulp-sourcemaps");
var sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");

gulp.task("sass", function (cb) {
  gulp
    .src("scss/**/style.scss")
    .pipe(map.init())
    .pipe(bulk())
    .pipe(sass())
    .pipe(concat("style.css"))
    .pipe(gulp.dest("css/"));
  cb();
});

gulp.task(
  "default",
  gulp.series("sass", function (cb) {
    gulp.watch("scss/*.scss", gulp.series("sass"));
    cb();
  })
);
