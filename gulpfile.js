"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var server = require("browser-sync").create();


gulp.task("css", function () {
  return gulp.src("sass/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});


gulp.task("server", function () {
  server.init({
    server: "./",
  });

  gulp.watch("sass/*.scss", gulp.series("css"));
});



gulp.task("start", gulp.series("css", "server"));
