const { minify } = require('html-minifier')
const fs = require('fs-extra')

const cwd = process.cwd()

const beforeEachPageSaved = (ctx) => {
  const { html } = ctx

  ctx.html = minify(html, { collapseWhitespace: true, minifyCSS: true, minifyJS: true })
}

const beforeServiceWorkerGenerated = async (ctx) => {
  const urls = ctx.routes.map(({ route }) => `
    <url>
      <loc>https://shailen.dev${route}</loc>
    </url>
  `)

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}  
    </urlset>
  `

  await fs.outputFile(`${cwd}/sitemap.xml`, sitemap)
}

module.exports = {
  beforeEachPageSaved,
  beforeServiceWorkerGenerated
}
