const gulp = require('gulp');
const html2pug = require('gulp-html2pug');

gulp.task('pug', function() {
  // Backend locales
  return gulp.src('convert.html')
  .pipe(html2pug({ fragment: true }))
  .pipe(gulp.dest('pug'));
});

gulp.task("default", ["pug"],function(){
});