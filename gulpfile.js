var fs = require('fs-extra');
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var defaultTask = ['compile-css'];
var path = require('path');

gulp.task('compile-css', ['clean:css'], function() {
  return gulp.src(['styles/less/tolookatme.less'])
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('styles/css'));
});

gulp.task('minify-css', ['clean:css'], function() {
  return gulp.src(['styles/less/tolookatme.less'])
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('styles/css'))
    .pipe(gulp.dest('styles/css'));
});

gulp.task('clean:css', function(cb) {
  fs.emptyDir('styles/css/', cb);
});

gulp.task('build', ['minify-css']);

gulp.task('default', defaultTask);
