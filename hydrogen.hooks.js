const { minify } = require('html-minifier')

const beforeEachPageSaved = (ctx) => {
  const { html } = ctx

  ctx.html = minify(html, { collapseWhitespace: true, minifyCSS: true, minifyJS: true })
}

module.exports = {
  beforeEachPageSaved,
}
