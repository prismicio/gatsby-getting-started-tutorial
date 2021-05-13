import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { repositoryConfigs } from '../utils/prismicPreviews'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SliceZone from '../components/SliceZone'

const capitalizeFirstLetter = (input) => {
  return input[0].toUpperCase() + input.slice(1)
}

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
  query PageQuery($uid: String) {
    prismicPage(uid: { eq: $uid }) {
      _previewable
      uid
      data {
        body {
          ... on PrismicPageDataBodyText {
            slice_type
            primary {
              columns
              content {
                raw
              }
            }
          }
          ... on PrismicPageDataBodyQuote {
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicPageDataBodyFullWidthImage {
            slice_type
            primary {
              full_width_image {
                url
              }
            }
          }
          ... on PrismicPageDataBodyImageGallery {
            slice_type
            primary {
              gallery_title {
                raw
              }
            }
            items {
              image {
                url
                alt
              }
              image_description {
                raw
              }
              link {
                url
                type
                uid
              }
              link_label {
                raw
              }
            }
          }
          ... on PrismicPageDataBodyImageHighlight {
            slice_type
            primary {
              featured_image {
                url
                alt
              }
              title {
                raw
              }
              description {
                raw
              }
              link {
                url
                type
                uid
              }
              link_label {
                raw
              }
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(PageTemplate, repositoryConfigs)
