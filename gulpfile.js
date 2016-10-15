const gulp = require('gulp');
const sass = require('gulp-sass');
const nano = require('gulp-cssnano');
const auto = require('gulp-autoprefixer');

const express = require('express');
const app = express();

const requiredir = require('requiredir');

const Metalsmith = require('metalsmith');
const layouts    = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');
const markdown   = require('metalsmith-markdown');

const hbs        = require('handlebars');
const hbsLayout  = require('handlebars-layout');

/** Setting up some HBS **/

const setupHBS = () => {
  const partials = requiredir('src/_templates/layouts/');
  hbs.registerHelper(hbsLayout(hbs));
  Object.keys(partials).forEach(partial => hbs.registerPartial(partial, partials[partial]));
};

setupHBS();

gulp.task('sass', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(auto())
    .pipe(nano())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('copy', function() {
  return gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
})

gulp.task('site', function(done) {
  Metalsmith('./')
    .source('./src/_pages')
    .clean(false)
    .destination('dist')
    .use(markdown())
    .use(layouts({
      engine: 'handlebars',
      directory: './src/_templates/layouts',
      default: 'default.hbs'
    }))
    .use(permalinks({
      pattern: ':title'
    }))
    .build(err => {
      if (err) {
        console.log(err);
        throw new Error(err);
      }
      done();
    });
});

gulp.task('server', function(done) {
  app.use(express.static('dist'));
  app.listen(3000);
  done();
});

gulp.task('default', ['sass', 'site', 'copy']);

gulp.task('dev', ['default', 'server'], function() {
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['site']);
  gulp.watch('src/**/*.hbs', ['site']);
  gulp.watch('src/**/*.hbs', function() {
    setupHBS();
  });
  gulp.watch('src/assets/**/*', ['copy']);
});
