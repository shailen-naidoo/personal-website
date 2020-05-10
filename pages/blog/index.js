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
    font-size: 13px;
  }

  article * a {
    border-bottom: none !important;
    cursor: pointer;
  }

  article {
    margin-top: 30px;
  }
</style>
<article>
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
</article>
`

module.exports = {
  page,
}