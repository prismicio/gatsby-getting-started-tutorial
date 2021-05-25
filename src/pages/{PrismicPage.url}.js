import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from './../utils/linkResolver'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { SliceZone } from '../components/SliceZone'

const PageTemplate = ({ data }) => {
  if (!data) return null
 const page = data.prismicPage

  return (
    <Layout>
      <Seo title={page.data.document_display_name.text} />
      <SliceZone sliceZone={page.data.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        document_display_name {
          text
        }
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

export default withPrismicPreview(PageTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
])
