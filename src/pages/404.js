import * as React from 'react'
import { withPrismicUnpublishedPreview, componentResolverFromMap } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from './../utils/linkResolver'
import HomePage from './index'
import PageTemplate from './{PrismicPage.url}'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  )
}

export default withPrismicUnpublishedPreview(
  NotFoundPage,
  [
    {
      repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
      linkResolver,
      componentResolver: componentResolverFromMap({
        homepage: HomePage,
        page: PageTemplate,
      }),
    },
  ],
)
