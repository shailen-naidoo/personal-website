const fs = require('fs-extra')
const emojiStrip = require('emoji-strip')
const md = require('markdown-it')()
const { JSDOM } = require('jsdom')
const highlight = require('highlight.js')

const cwd = process.cwd()

module.exports = async () => {
  if (!(await fs.pathExists(`${cwd}/public/posts`))) {
    return []
  }

  const postFilePaths = await fs.readdir(`${cwd}/public/posts`)
  const posts = await Promise.all(postFilePaths.map(async (path) => {
    const data = await fs.readJSON(`${cwd}/public/posts/${path}`)
    const [slug] = path.split('.')

    const dom = new JSDOM(md.render(data.body))

    Array.from(dom.window.document.querySelectorAll('pre code')).forEach(codeblock => {
      codeblock.innerHTML = highlight.highlightAuto(
        codeblock.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      ).value

      console.log(codeblock.innerHTML)
    })

    return {
      data: {
        ...data,
        body: dom.window.document.body.innerHTML,
      },
      path: `/blog/posts/${emojiStrip(slug)}`
    }
  }))

  return posts
}