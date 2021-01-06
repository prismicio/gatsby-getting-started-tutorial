import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'
import MainContent from '../components/MainContent'

const Homepage = ({ data }) => {
  const prismicContent = data.prismic.allHomepages.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node

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
{
  prismic {
    allHomepages {
      edges {
        node {
          banner_title
          banner_description
          banner_link {
            _linkType
            ... on PRISMIC_Page {
              _meta {
                uid
                type
              }
            }
          }
          banner_link_label
          banner_background
        }
      }
    }
  }
}
`

export default Homepage
