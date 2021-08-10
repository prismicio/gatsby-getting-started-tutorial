import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/LinkResolver'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { SliceZone } from '../components/SliceZone'

const HomeTemplate = ({ data }) => {
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

export default withPrismicPreview(HomeTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
])
