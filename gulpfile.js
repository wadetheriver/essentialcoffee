var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');


var jsSources = [
  'components/scripts/*.js'
];

var sassSources = [
  'components/sass/*.scss'
];

var coffeeSources = [
  'components/coffee/*.coffee'
]

// Make destination in components/js
// process with other components/js files (if there are any)
gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./components/scripts'));
});

gulp.task('js', function() {
  gulp.src(jsSources)
          .pipe(uglify())
          .pipe(concat('script.js'))
          .pipe(gulp.dest('./js'));
});

gulp.task('sass', function () {
 return gulp.src(sassSources)
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'nested'}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'));
});


gulp.task('watch', function() {
  gulp.watch(coffeeSources, ['coffee']);
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
});

gulp.task('drink', function() {
  gulp.watch(coffeeSources, ['coffee']);
});

gulp.task('default', ['sass','coffee', 'js', 'watch']);
