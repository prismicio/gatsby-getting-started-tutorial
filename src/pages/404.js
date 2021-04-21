import * as React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { HomeTemplate } from './index'
import { PageTemplate } from '../templates/Page'

const NotFoundPage = () => (
  <div>
    <h1>Page not found!</h1>
  </div>
)

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  /* Make sure that you update the templateMap to match the page templates of your project. 
  * Usually, these are under /pages or /templates. */
  templateMap: {
    page: PageTemplate,
    homepage: HomeTemplate,
    prismicPage: PageTemplate,
    prismicHomepage: HomeTemplate,
  },
})