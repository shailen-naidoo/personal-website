const fs = require('fs-extra')
const html = require('html-template-tag')

const cwd = process.cwd()

const generateArticleCards = async () => {
  if (!(await fs.pathExists(`${cwd}/public/posts`))) {
    return []
  }

  const postFilePaths = await fs.readdir(`${cwd}/public/posts`)
  const posts = await Promise.all(postFilePaths.map(async (path) => {
    const data = await fs.readJSON(`${cwd}/public/posts/${path}`)
    const [slug] = path.split('.')

    return html`
      <article>
        <h2><a href="/blog/posts/${slug}">${data.title}</a></h2>
        <p>${data.summary}</p>
        <time datetime="${new Date(data.created_at).toISOString()}">${data.created_at}</time>
      </article>
    `
  }))

  return posts
}

const page = async () => html`
<style>
  h2 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 5px;
  }

  time {
    font-size: 13px;
  }

  article * a {
    border-bottom: none !important;
    cursor: pointer;
  }
</style>
${await generateArticleCards()}
`

module.exports = {
  page,
}