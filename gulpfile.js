var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    webpack = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src('src/app.es6.js')
      .pipe(webpack(require('./webpack.config')))
      .pipe(gulp.dest('./dist'));
});

gulp.task('copyIndex', function() {
  return gulp.src('src/index.html')
      .pipe(gulp.dest('./dist'));
});

gulp.task('copyPartials', function() {
  return gulp.src('src/**/*.html')
      .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch([
      'src/**/*.html',
      'src/**/*.es6.js'
    ], [
      'webpack',
      'copyIndex',
      'copyPartials'
    ]);
});

gulp.task('default', ['webpack', 'copyIndex', 'watch']);
