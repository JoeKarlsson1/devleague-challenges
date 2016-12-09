'use strict';
var gulp   = require('gulp');
var plugins = require('gulp-load-plugins')();
require('babel-core/register');

var paths = {
  lint : ['./gulpfile.js', './lib/**/*.js'],
  watch : ['./gulpfile.js', './lib/**', './test/**/*.js', '!test/{temp,temp/**}'],
  tests : ['./test/**/*.js', '!test/{temp,temp/**}'],
  source : ['./lib/*.*'],
  bin : './bin/',
  dist : ['./bin/*.js']
};

var plumberConf = {};

if (process.env.CI) {
  plumberConf.errorHandler = function(err) {
    throw err;
  };
}

gulp.task('lint', function () {
  return gulp.src(paths.lint)
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.plumber(plumberConf))
    .pipe(plugins.jscs())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', function () {
  return gulp.src(paths.tests)
    .pipe(plugins.plumber(plumberConf))
    .pipe(plugins.mocha({
      'bail' : true
    }));
});

gulp.task('watch', ['test'], function () {
  gulp.watch(paths.watch, ['test']);
});

gulp.task('test', ['build', 'lint', 'mocha']);

gulp.task('default', ['watch']);

gulp.task('run', function () {
  return gulp.src(['./example/**'])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.bin))
    .on('finish', function(){
      require('./bin/index');
    });
});

gulp.task('build', function () {
  return gulp.src(paths.source)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.bin));
});
