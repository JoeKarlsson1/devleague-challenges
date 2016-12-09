var gulp = require('gulp');
require('require-dir')('build');

gulp.task('default', ['build', 'connect', 'watch', 'sass']);