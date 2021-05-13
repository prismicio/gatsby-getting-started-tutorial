import * as React from 'react'
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import linkResolver from '../utils/linkResolver'

import PageTemplate from './../templates/Page'
import HomeTemplate from './../pages/index'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  )
}

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
      homepage: HomeTemplate,
    }),
  },
])
