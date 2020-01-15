const gulp = require('gulp');
const html2pug = require('gulp-html2pug');

const target = ["./convert.html"];

function h2pug() {
  return gulp.src(target)
  .pipe(html2pug({ fragment: true }))
  .pipe(gulp.dest('pug'));
}

function watch(){
  gulp.watch(target, h2pug);
}

const start = gulp.series(h2pug, watch);
gulp.task("start", h2pug);

exports.default = start;