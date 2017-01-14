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
const metadata   = require('metalsmith-metadata');
const inplace    = require('metalsmith-in-place');
const markdown   = require('metalsmith-markdown');
const kramed     = require('kramed');
const marked     = require('marked');

const hbs        = require('handlebars');
const hbsLayout  = require('handlebars-layout');
const glob       = require('glob');
const path       = require('path');
const fs         = require('fs');

/** Setting up some HBS **/

const setupPartials = (dir) => {
  const partials = glob.sync(`${path.resolve(dir)}/**/*.*`);
  partials
    .map(partial => ({
      name: partial.split(dir)[1].split('.')[0],
      content: fs.readFileSync(partial).toString()
    }))
    .map(partial => hbs.registerPartial(partial.name, partial.content));
  //Object.keys(partials).forEach(partial => console.log(partials[partial].toString()));
  //Object.keys(partials).forEach(partial => hbs.registerPartial(partial, partials[partial]));
};

const setupHBS = () => {
  hbs.registerHelper(hbsLayout(hbs));
  //setupPartials('src/_includes/');
  setupPartials('src/_templates/layouts/');
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
});

const definitionList = (line) => {
  if (line.startsWith(': ')) {
    return `<dd>${line.replace(': ', '')}</dd>`;
  }
  return `<dt>${line}</dt>`;
}

const getRenderer = () => {
  const renderer = new kramed.Renderer();
  renderer.text = (text) => text;
  renderer.paragraph = (text) => {
    let unparsed = text;
    if (unparsed.indexOf('\n: ') >= 0) {
      unparsed = unparsed
        .split('\n')
        .map(definitionList)
        .join('\n');
      unparsed = `<dl>${unparsed}</dl>`;
    }
    return kramed.Renderer.prototype.paragraph(unparsed);
  }
  return renderer;
};

const getMetadata = (dir) => {
  const files = glob.sync(`${path.resolve(dir)}/**/*`);
  const config = {};
  files.forEach(file => {
    const key = path.basename(file, path.extname(file));
    config[key] = `_data/${key}${path.extname(file)}`;
  });
  console.log(config);
  return config;
}

const templateConfig = {
  engine: 'handlebars',
  directory: './src/_templates/layouts',
  default: 'default.hbs',
  partials: './src/_includes'
};

gulp.task('site', function(done) {
  Metalsmith('./')
    .source('./src/_pages')
    .clean(false)
    .destination('dist')
    .use(metadata(getMetadata('./src/_pages/_data')))
    .use(markdown({
      renderer: getRenderer(),
      gfm: true,
      smartypants: true
    }))
    .use(permalinks({
      pattern: ':title'
    }))
    .use(inplace(templateConfig))
    .use(layouts(templateConfig))
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
  gulp.watch('src/**/*.md', ['site']);
  gulp.watch('src/**/*.hbs', ['site']);
  gulp.watch('src/**/*.hbs', function() {
    setupHBS();
  });
  gulp.watch('src/assets/**/*', ['copy']);
});
