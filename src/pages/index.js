import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import HomepageBanner from '../components/HomepageBanner'
import SliceZone from '../components/SliceZone'
import linkResolver from '../utils/linkResolver'

const HomeTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data
  const prismicNavigation = data.prismicNavigation

  const bannerContent = {
    title: doc.banner_title,
    description: doc.banner_description,
    link: doc.banner_link,
    linkLabel: doc.banner_link_label,
    background: doc.banner_background,
  }

  return (
    <Layout isHomepage navigation={prismicNavigation}>
      <Seo title="Home" />
      <HomepageBanner bannerContent={bannerContent} />
      <SliceZone sliceZone={doc.body} />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    prismicHomepage {
      _previewable
      data {
        banner_title {
          raw
        }
        banner_description {
          raw
        }
        banner_link {
          url
          type
          uid
        }
        banner_link_label {
          raw
        }
        banner_background {
          url
        }
        body {
          ... on PrismicHomepageDataBodyText {
            slice_type
            primary {
              columns
              content {
                raw
              }
            }
          }
          ... on PrismicHomepageDataBodyQuote {
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicHomepageDataBodyFullWidthImage {
            slice_type
            primary {
              full_width_image {
                url
                alt
              }
            }
          }
          ... on PrismicHomepageDataBodyImageGallery {
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
          ... on PrismicHomepageDataBodyImageHighlight {
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
  }
`

export default withPrismicPreview(HomeTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
])
