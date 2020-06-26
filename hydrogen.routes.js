const fs = require('fs-extra')
const emojiStrip = require('emoji-strip')
const md = require('markdown-it')()

const cwd = process.cwd()

module.exports = async () => {
  if (!(await fs.pathExists(`${cwd}/public/posts`))) {
    return []
  }

  const postFilePaths = await fs.readdir(`${cwd}/public/posts`)
  const posts = await Promise.all(postFilePaths.map(async (path) => {
    const data = await fs.readJSON(`${cwd}/public/posts/${path}`)
    const [slug] = path.split('.')

    return {
      data: {
        ...data,
        body: md.render(data.body),
      },
      path: `/blog/posts/${emojiStrip(slug)}`
    }
  }))

  return posts
}