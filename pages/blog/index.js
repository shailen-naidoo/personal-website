const fs = require('fs-extra')
const html = require('html-template-tag')

const cwd = process.cwd()

const generateArticleCards = async () => {
  const postFilePaths = await fs.readdir(`${cwd}/public/posts`)
  const posts = await Promise.all(postFilePaths.map(async (path) => {
    const data = await fs.readJSON(`${cwd}/public/posts/${path}`)
    const [slug] = path.split('.')

    return html`
      <article>
        <h2><a href="/blog/posts/${slug}">${data.title}</a></h2>
        <p>${data.summary}</p>
        <time datetime="${data.created_at}">${data.created_at}</time>
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

  article {
    /* margin-top: 30px; */
  }
</style>
${await generateArticleCards()}
<!-- <article>
  <h2><a>Web Workers, multi-threading in the browser</a></h2>
  <p>Web Workers is a browser API which allows use to run JS off the main thread</p>
  <time datetime="2020-10-07">07 October 2020</time>
</article>
<article>
  <h2><a>Is postMessage slow?</a></h2>
  <p>Web Workers is a browser API which allows use to run JS off the main thread</p>
  <time datetime="2020-10-07">07 October 2020</time>
</article>
<article>
  <h2><a>When should you be using Web Workers?</a></h2>
  <p>Web Workers is a browser API which allows use to run JS off the main thread</p>
  <time datetime="2020-10-07">07 October 2020</time>
</article> -->
`

module.exports = {
  page,
}