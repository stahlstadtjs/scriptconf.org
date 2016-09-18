const gulp = require('gulp');
const sass = require('gulp-sass');
const nano = require('gulp-nano');
const auto = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(auto())
    .pipe(nano())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('default', ['sass']);

gulp.task('dev', ['default'], function() {
  gulp.watch('src/**/*.scss', ['sass']);
});
