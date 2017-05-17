const timestamp = Date.now();

const asset = (Handlebars) => (text) => {
  return new Handlebars.SafeString(`${text}?v=${timestamp}`);
};

module.exports = (hbs) => ({
  asset: asset(hbs),
});
