var gulp = require('gulp');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

// These js files must be in this exact order.
gulp.task('concat', function(done) {
  return gulp.src([ './js/classes.js', './js/data.js', './js/declarations.js', "js/functions.js", "js/google.js"])
    .pipe(concat('all.js'))
    // .pipe(gzip())
    .pipe(gulp.dest('./dist/concatenated'));
    done();
});
gulp.task('concat-css', function(done) {
  return gulp.src([ './css/*.css'])
    .pipe(concat('allcss.css'))
    // .pipe(gzip())
    .pipe(gulp.dest('./dist/concatenated/css'));
    done();
});
gulp.task('compress', function (cb) {
  pump([
        gulp.src('dist/concatenated/all.js'),
        uglify(),
        gulp.dest('dist/uglified')
    ],
    cb
  );
});
gulp.task('compress-app', function (cb) {
  pump([
        gulp.src('js/app.js'),
        uglify(),
        gulp.dest('dist/uglified')
    ],
    cb
  );
});
gulp.task('css-min', function (done) {
    gulp.src('dist/concatenated/css/allcss.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/cssmin'));
        done();
});
gulp.task('images',  function (done) {
    gulp.src('css/images/large/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/css/images/large/'))
});
gulp.task('build-1', [`concat`, `concat-css`, `css-min`, `compress`, `compress-app`, 'images'], function (){
});
gulp.task('build-2', [`concat`, `concat-css`, `css-min`, `compress`, `compress-app`, 'images'], function (){
});