const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')()

const config = withMDX(withTypescript(withCSS()))

module.exports = {
  ...config,
  exportTrailingSlash: true,
}
