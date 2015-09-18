var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    gulpUglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    webpack = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src('src/app.es6.js')
      .pipe(webpack(require('./webpack.config')))
      //.pipe(ngAnnotate())
      // .pipe(gulpUglify()
      //     .on('error', function(e) {
      //       console.log('\x07',e.message); return this.end();
      //     }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('copyIndex', function() {
  return gulp.src('src/index.html')
      .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch([
      'src/**/*.html',
      'src/**/*.es6.js'
    ], [
      'webpack',
      'copyIndex'
    ]);
});

gulp.task('default', ['webpack', 'copyIndex', 'watch']);