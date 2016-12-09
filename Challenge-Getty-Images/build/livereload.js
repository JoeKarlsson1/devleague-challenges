var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root : 'public',
    livereload : true
  });
});

gulp.task('livereload', function () {
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});