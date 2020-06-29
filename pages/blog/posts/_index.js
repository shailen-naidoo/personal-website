const html = require('html-template-tag')

const page = ({ route }) => html`
<link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/tomorrow-night-bright.css">
<style>
  h2 {
    margin-bottom: 5px;
  }

  h3 {
    margin-top: 15px !important;
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

  hr {
    margin-bottom: 0;
  }
</style>
<h2>${route.data.title}</h2>
<time datetime="${route.data.created_at}">${route.data.created_at}</time>
$${route.data.body}
`

module.exports = {
  page,
}