import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SliceZone from '../components/SliceZone'

import linkResolver from '../utils/linkResolver'

const Page = ({ data }) => {
  if (!data) return null
  const doc = data.prismicPage
  const prismicNavigation = data.prismicNavigation
  // const { repositoryName } = data.sitePlugin.pluginOptions

  const capitalizeFirstLetter = (input) => {
    return input[0].toUpperCase() + input.slice(1)
  }

  return (
    <Layout navigation={prismicNavigation}>
      <SEO title={capitalizeFirstLetter(doc.uid)} />
      <SliceZone sliceZone={doc.data.body} />
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
    prismicNavigation {
      ...HeaderQuery
    }
    sitePlugin(name: { eq: "gatsby-source-prismic" }) {
      pluginOptions {
        repositoryName
      }
    }
  }
`

export default withPrismicPreview(Page, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
])
