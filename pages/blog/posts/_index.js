const html = require('html-template-tag')

const page = ({ route }) => html`
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
</style>
<h2>${route.data.title}</h2>
<time datetime="${route.data.created_at}">${route.data.created_at}</time>
$${route.data.body}
`

module.exports = {
  page
}