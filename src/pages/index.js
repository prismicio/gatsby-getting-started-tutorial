import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'
import MainContent from '../components/MainContent'

const Homepage = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicHomepage.edges[0].node.data

  const bannerContent = {
    title: document.banner_title,
    description: document.banner_description,
    link: document.banner_link,
    linkLabel: document.banner_link_label,
    background: document.banner_background,
  }

  return (
    <Layout isHomepage>
      <SEO title="Home" />
      <HomepageBanner bannerContent={bannerContent} />
      <MainContent />
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
  allPrismicHomepage {
    edges {
      node {
        data {
          banner_title {
            raw
          }
          banner_description {
            raw
          }
          banner_link {
            uid
            type
          }
          banner_link_label {
            raw
          }
          banner_background {
            url
            thumbnails
            alt
          }
        }
      }
    }
  }
}
`

export default Homepage