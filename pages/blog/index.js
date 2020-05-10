const html = require('html-template-tag')

const page = () => html`
<style>
  h2 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 5px;
  }

  time {
    font-size: 12px;
  }

  article * a {
    border-bottom: none !important;
    cursor: pointer;
  }
</style>
<article>
  <h2><a>Web Workers, multi-threading in the browser</a></h2>
  <p>Web Workers is a browser API which allows use to run JS off the main thread</p>
  <time datetime="2020-10-07">07 October 2020</time>
</article>
`

module.exports = {
  page,
}