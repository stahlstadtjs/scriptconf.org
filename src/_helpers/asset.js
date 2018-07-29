const timestamp = Date.now();

const asset = (Handlebars) => (text) => {
  return new Handlebars.SafeString(`${text}?v=${timestamp}`);
};

const select = (Handlebars) => (context, options) => {
  const speakers = options.data.root['speakers-2018'].filter(el => el.id === context);
  return options.fn(speakers.pop());
}

const year = (Handlebars) => () => {
  return (new Date()).getFullYear();
}

/**
 * Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

 */

module.exports = (hbs) => ({
  asset: asset(hbs),
  select: select(hbs),
  year: year(hbs),
});
