const gulp = require('gulp');
const html2pug = require('gulp-html2pug');

function h2pug() {
  return gulp.src('convert.html')
  .pipe(html2pug({ fragment: true }))
  .pipe(gulp.dest('pug'));
}

function watch(){
  gulp.watch(["./convert.html"], h2pug);
}

const start = gulp.series(h2pug, watch);
gulp.task("start", h2pug);

exports.default = start;