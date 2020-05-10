const html = require('html-template-tag')

const page = ({ data }) => html`
<style>
  h2 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 5px;
  }

  time {
    font-size: 13px;
    margin-bottom: 20px;
  }

  img {
    margin: 25px 0px;
    border-radius: 3px;
  }
</style>
<h2>Web Workers, multi-threading in the browser</h2>
<time datetime="2020-10-07">07 October 2020</time>
<p>
Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using <code>XMLHttpRequest</code> (although the responseXML and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa). This article provides a detailed introduction to using web workers.
</p>
`

module.exports = {
  page
}