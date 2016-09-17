var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test-all', function() {
  return gulp.src('./test/**/*.js')
    .pipe(jasmine());
});