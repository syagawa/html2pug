const gulp = require('gulp');
const html2pug = require('gulp-html2pug');

function h2pug() {
  // Backend locales
  return gulp.src('convert.html')
  .pipe(html2pug({ fragment: true }))
  .pipe(gulp.dest('pug'));
}

// gulp.task("default", ["pug"],function(){
// });

const start = gulp.series(h2pug);
gulp.task("start", h2pug);

exports.default = start;