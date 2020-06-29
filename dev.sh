function netlify_build {
  npx hydrogen build
  cp -r admin dist/admin
  cp -r sitemap.xml dist/sitemap.xml
  cp -r blog-posts.json dist/blog-posts.json
}