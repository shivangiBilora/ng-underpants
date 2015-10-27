var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    webpack = require('webpack-stream'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync= require('browser-sync').create();

var paths = {
  js: ['src/**/*.es6.js'],
  scss: ['src/**/*.scss'],
  html: ['src/**/*.html']
};

// Task to initiate webpack. src.app.es6.js is the entry point
gulp.task('webpack', function() {
  gulpUtil.log(gulpUtil.colors.blue('Running webpack using babel tranpilation'));
  return gulp.src('src/app.es6.js')
      .pipe(webpack(require('./webpack.config')))
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
});

// Task to copy HTML partials and index.html from src to dist
gulp.task('copyHtml', function() {
  gulpUtil.log(gulpUtil.colors.green('Copying HTML'));
  return gulp.src(paths.html)
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
});

// Task to compile scss to css using gulp-sass
gulp.task('scss', function() {
  gulpUtil.log(gulpUtil.colors.magenta('Compiling SCSS styles'));
  return gulp.src('src/components/main.scss')
      .pipe(sass({
        style: 'expanded'
      }).on('error', sass.logError))
      .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
});

// Watch tasks
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.html, ['copyHtml']);
  gulp.watch(paths.js, ['webpack']);
  browserSync.init({
    server:"./dist",
    scrollRestoreTechnique: 'cookie'
  })
});

gulp.task('default', [
  'webpack',
  'scss',
  'copyHtml',
  'watch'
]);
