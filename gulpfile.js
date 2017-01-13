var gulp = require('gulp');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');
var pump = require('pump');



// These js files must be in this exact order.
gulp.task('default', function() {
  return gulp.src([ './js/classes.js', './js/data.js', './js/declarations.js', "js/functions.js", "js/google.js"])
    .pipe(concat('all.js'))
    // .pipe(gzip())
    .pipe(gulp.dest('./dist/concatenated'));
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
