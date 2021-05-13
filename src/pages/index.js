import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { RichText } from 'prismic-reactjs'

import { repositoryConfigs } from '../utils/prismicPreviews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { SliceZone } from '../components/SliceZone'

const HomePage = ({ data }) => {
  if (!data) return null

  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage={true}>
      <Seo title="Home" />
      <HomepageBanner
        title={RichText.asText(doc.banner_title.raw)}
        description={RichText.asText(doc.banner_description.raw)}
        linkUrl={doc.banner_link.url}
        linkLabel={RichText.asText(doc.banner_link_label.raw)}
        backgroundUrl={doc.banner_background.url}
      />
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
  }
`

export default withPrismicPreview(HomePage, repositoryConfigs)
