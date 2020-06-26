const html = require('html-template-tag')

module.exports = ({ content }) => html`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Shailen Naidoo | JavaScript Developer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="title" content="Shailen Naidoo | JavaScript Developer">
    <meta name="description" content="Open-source JavaScript developer and lover of civic-tech :)">
    <link rel="icon" href="/public/logo.png">
    <style type="text/css">
      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%
      }

      body {
        font-family: sans-serif;
        margin: 0
      }

      a:active,
      a:hover {
        outline: 0
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline
      }

      sup {
        top: -0.5em
      }

      sub {
        bottom: -0.25em
      }

      hr {
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        height: 0
      }

      pre {
        overflow: auto
      }

      code,
      kbd,
      pre,
      samp {
        font-family: monospace, monospace;
        font-size: 1em
      }

      table {
        border-collapse: collapse;
        border-spacing: 0
      }

      td,
      th {
        padding: 0
      }

      ::-moz-selection {
        background: #585e6b;
        color: white
      }

      ::selection {
        background: #585e6b;
        color: white
      }

      html {
        font-size: 14px
      }

      @media (min-width: 320px) and (max-width: 1400px) {
        html {
          font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1400 - 320)))
        }
      }

      @media (min-width: 1400px) {
        html {
          font-size: 18px
        }
      }

      h1,
      .h1 {
        line-height: 1em;
        margin-top: 0.5em;
        margin-bottom: 1em
      }

      h2,
      .h2 {
        font-size: 2em;
        line-height: 1.5em;
        margin-top: 0.75em;
        margin-bottom: 0.75em
      }

      h3,
      .h3 {
        line-height: 1.125em;
        margin-top: 1.125em;
        margin-bottom: 0.5em
      }

      h4,
      .h4 {
        line-height: 1.6875em;
        margin-top: 1.6875em;
        margin-bottom: 0em
      }

      h5,
      .h5 {
        line-height: 1.6875em;
        margin-top: 1.6875em;
        margin-bottom: 0em
      }

      p,
      ul,
      ol,
      table,
      blockquote {
        margin-top: 0em;
        margin-bottom: 1.6875em
      }

      hr,
      .hr {
        border: 1px solid #c1c1c1;
        margin: -1px 0 2rem
      }

      b,
      i,
      strong,
      em,
      small,
      code {
        line-height: 0
      }

      sub,
      sup {
        line-height: 0;
        position: relative;
        vertical-align: baseline
      }

      sup {
        top: -0.5em
      }

      sub {
        bottom: -0.25em
      }

      small {
        font-size: 80%
      }

      ol,
      ul {
        padding: 0;
        margin-left: 1.5rem
      }

      ol,
      .list-ordered {
        list-style: decimal
      }

      * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box
      }

      html {
        background: linear-gradient(135deg, #cff4d2 0%, #cff4d2 20%, #8cffe8 100%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 100%;
        max-height: 100%;
        -webkit-tap-highlight-color: transparent;
        scrollbar-color: green;
        scrollbar-width: thin
      }

      body {
        color: #404d5b;
        font-family: "Source", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        font-weight: 400;
        height: 100vh;
        letter-spacing: 0.01rem;
        line-height: 1.7;
        padding: 0 1rem
      }

      a:not(.home-link) {
        border-bottom: 1px solid #9d005a;
        color: #9d005a;
        display: inline-block;
        font-weight: 550;
        line-height: 1.4;
        outline: none;
        position: relative;
        text-decoration: none;
        transition: background-color 0.3s, border-color 0.3s;
        vertical-align: baseline;
        white-space: nowrap
      }

      a:not(.home-link):hover {
        border-color: rgba(52, 73, 94, 0);
        background-color: rgba(52, 73, 94, 0.1)
      }

      img {
        max-width: 100%
      }

      .container {
        max-width: 1170px;
        margin: 0 auto
      }

      .main-header {
        align-items: baseline;
        display: flex
      }

      .main-header > a:nth-child(2) {
        margin-left: 30px;
        cursor: pointer;
      }

      .home-link {
        align-items: center;
        border: 4px solid #404d5b;
        color: #404d5b;
        display: flex;
        font-size: 1.2em;
        font-weight: 650;
        height: 60px;
        justify-content: center;
        margin-top: 2rem;
        text-decoration: none;
        width: 60px
      }

      .sr-only:not(:focus):not(:active) {
        clip: rect(0 0 0 0);
        clip-path: inset(100%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px
      }

      code {
        background-color: rgba(52, 73, 94, 0.1);
        padding: 2px 5px;
        border-radius: 2px;
      }

      pre {
        background: #363C44;
        border: 1px solid #ddd;
        border-left: 3px solid black;
        border-radius: 5px;
        color: #666;
        page-break-inside: avoid;
        font-family: monospace;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 100%;
        overflow: auto;
        padding: 1em 1.5em;
        display: block;
        word-wrap: break-word;
      }

      pre code {
        background-color: unset;
        color: white;
      }
    </style>
    <style>
      /* Home page */

      .main-home {
        display: grid;
        padding-bottom: 5rem;
      }

      .home-header {
        font-size: 4em;
        margin: 4rem 0 3rem;
      }

      @media (min-width: 33.750em) {
        .home-header {
          font-size: 5.5em;
        }

        .home-header-indent {
          display: block;
          /* transform: translateX(1ch); */
        }
      }

      .lead {
        font-size: 1.2em;
        max-width: 50ch;
      }

      .home-section {
        max-width: 65ch;
      }

      .progress {
        color: #585e6b;
        font-family: monospace;
        position: absolute;
        right: 2rem;
        top: 2rem;
        writing-mode: vertical-lr;
      }

      p+h3 {
        margin-top: 5rem;
      }

      .inline-link {
        margin-right: 1rem;
      }
    </style>
    <meta name="theme-color" content="#cff4d2">
    <title>Shailen Naidoo | JavaScript Developer</title>
    <meta property="og:title" content="Shailen Naidoo | JavaScript Developer" />
    <meta name="description" content="Open-source JavaScript developer and lover of civic-tech :)" />
    <meta property="og:description" content="Open-source JavaScript developer and lover of civic-tech :)" />
    <meta property="og:url" content="https:/shailen.dev/" />
    <meta property="og:site_name" content="Shailen Naidoo" />
    <script
      type="application/ld+json"> { "@context": "http://schema.org", "@type": "WebSite", "name": "Shailen Naidoo", "headline": "Shailen Naidoo | JavaScript Developer", "description": "Open-source JavaScript developer and lover of civic-tech :)", "logo": "", "url": "https:/shailen.dev/" } </script>
  </head>
  <body>
    <header class="main-header container">
      <a href="/" class="home-link"> <span>SN</span> </a>
      <a href="/blog">Blog</a>
    </header>
    <section class="main-home container">
      $${content}
    </section>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130574703-3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'UA-130574703-3');
    </script>
  </body>
</html>
`
