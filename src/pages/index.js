import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { components } from '../slices'

const HomeTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage={true}>
      <Seo title="Home" />
      <HomepageBanner
        title={doc.banner_title.text}
        description={doc.banner_description.text}
        linkUrl={doc.banner_link.url}
        linkLabel={doc.banner_link_label.text}
        backgroundUrl={doc.banner_background.url}
      />
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    prismicHomepage {
      _previewable
      data {
        banner_title {
          text
        }
        banner_description {
          text
        }
        banner_link {
          url
          type
          uid
        }
        banner_link_label {
          text
        }
        banner_background {
          url
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...HomepageDataBodyText
          ...HomepageDataBodyQuote
          ...HomepageDataBodyFullWidthImage
          ...HomepageDataBodyImageGallery
          ...HomepageDataBodyImageHighlight
        }
      }
    }
  }
`

export default withPrismicPreview(HomeTemplate)
