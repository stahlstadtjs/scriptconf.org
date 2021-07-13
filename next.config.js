const withCSS = require("@zeit/next-css");
const withMDX = require("@next/mdx")();

const config = withMDX(withCSS());

module.exports = {
  ...config,
  trailingSlash: true,
};
