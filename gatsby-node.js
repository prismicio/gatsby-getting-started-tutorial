const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  pages.data.allPrismicPage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, './src/templates/page.js'),
      context: {
        id: page.id,
        uid: page.uid,
        lang: page.lang,
        type: page.type,
      },
    })
  })
}
