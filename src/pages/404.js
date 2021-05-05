import * as React from 'react'
import { graphql } from 'gatsby'
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import linkResolver from '../utils/linkResolver'

import Page from './../templates/Page'
import HomeTemplate from './../pages/index'

const NotFoundPage = ({ data }) => {
  const page = data.prismicPage

  return (
    <div>
      <h1>{page.uid}</h1>
    </div>
  )
}

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: Page,
      homepage: HomeTemplate
    }),
  },
])

export const query = graphql`
  query NotFoundPage {
    prismicPage(id: { eq: "404" }) {
      _previewable
      uid
    }
  }
`