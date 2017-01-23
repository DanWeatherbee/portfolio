var gulp = require('gulp');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

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
gulp.task('uglified-critical-js', function (cb) {
  pump([
        gulp.src('js/critical-js.js'),
        uglify(),
        gulp.dest('dist/uglified/critical')
    ],
    cb
  );
});
gulp.task('css-min', function (done) {
    gulp.src('dist/concatenated/css/*.*')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/cssmin'));
        done();
});
gulp.task('critical-css-min', function (done) {
    gulp.src('css/critical-css.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/critical-cssmin'));
        done();
});
gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('images-css',  function (done) {
    gulp.src('css/images/large/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/cssmin/images/large/'))
});
gulp.task('images-main-medium',  function (done) {
    gulp.src('images/medium/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/medium/'))
});
gulp.task('images-main-small',  function (done) {
    gulp.src('images/small/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/small/'))
});

// Gzip
gulp.task('gzip-main-medium', function() {
 gulp.src('dist/images/medium/*.*')
 .pipe(gzip())
 .pipe(gulp.dest('dist/images/medium/'));
});
gulp.task('gzip-main-small', function() {
 gulp.src('dist/images/small/*.*')
 .pipe(gzip())
 .pipe(gulp.dest('dist/images/small/'));
});
gulp.task('gzip-images-css', function() {
 gulp.src('dist/cssmin/images/large/*.*')
 .pipe(gzip())
 .pipe(gulp.dest('dist/cssmin/images/large/'));
});
gulp.task('gzip-js', function() {
 gulp.src('dist/uglified/*.*')
 .pipe(gzip())
 .pipe(gulp.dest('dist/uglified/'));
});

// This includes all but images and gzip - run twice to create folder to minify from.
gulp.task('build', [`concat`, `concat-css`, `css-min`, `critical-css-min`, `compress`, `compress-app`, `uglified-critical-js`, `minify-html`], function (){
    console.log("README IMPORTANT");
    console.log("building js, css and minify html for distribution.");
    console.log("run twice to create folder to minify from.");
    console.log("run build build-images for images or build-optimized for full build.");
});

// Optimized Images.
gulp.task('build-images', [`images-css`, `images-main-medium`, `images-main-small`], function (){
    console.log("README IMPORTANT");
    console.log("building images for distribution.");
    console.log("you must run build one time before running build-images.");
});

// Gzip Optimized images.
gulp.task('build-gzip', [`gzip-main-medium`, `gzip-main-small`, `gzip-images-css`, `minify-html`, `gzip-js`], function (){
    console.log("README IMPORTANT");
    console.log("you must run build-images one time first before build-gzip.");
});
                                     // ONE STEP BUILD
/* Delete Dist Folder - Run this task 3 times for full build with optimized assets in gzip,
 then replace index with dist/index.html in root folder.
 */
gulp.task('build-optimized', [`concat`, `concat-css`, `css-min`, `critical-css-min`, `compress`, `compress-app`, `uglified-critical-js`, `images-css`, `images-main-medium`, `images-main-small`, `gzip-main-medium`, `gzip-main-small`, `gzip-images-css`, `minify-html`, `gzip-js`], function (){
    console.log("ONE STEP BUILD building all files for Optimized distribution.");
    console.log("README IMPORTANT - DELETE DIST FOLDER IF EXISTS!");
    console.log("YOU MUST RUN THIS TASK 3 TIMES TO PRE CREATE FOLDERS IN ADVANCE!");
});