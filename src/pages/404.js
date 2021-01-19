import * as React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { homeTemplate } from '../pages/index'
import { PageTemplate } from '../templates/Page'
import { Layout } from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <h1>Page not found!</h1>
  </Layout>
)

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  /* Make sure that you update the templateMap to match the page templates of your project. 
  * Usually, these are under /pages or /templates. */
  templateMap: {
    page: PageTemplate,
    homeTemplate: homeTemplate,
  },
})