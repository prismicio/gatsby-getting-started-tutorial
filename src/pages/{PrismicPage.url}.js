import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { repositoryConfigs } from '../utils/prismicPreviews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { SliceZone } from '../components/SliceZone'

const capitalizeFirstLetter = (input) => {
  return input[0].toUpperCase() + input.slice(1)
}

// TODO: Add a Title field to page.json rather than use the UID.
const PageTemplate = ({ data }) => {
  if (!data) return null

  const page = data.prismicPage

  return (
    <Layout>
      <Seo title={capitalizeFirstLetter(page.uid)} />
      <SliceZone sliceZone={page.data.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      uid
      data {
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyText
          ...PageDataBodyQuote
          ...PageDataBodyFullWidthImage
          ...PageDataBodyImageGallery
          ...PageDataBodyImageHighlight
        }
      }
    }
  }
`

export default withPrismicPreview(PageTemplate, repositoryConfigs)
