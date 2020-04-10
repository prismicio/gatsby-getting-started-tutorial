import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'
import SliceZone from '../components/SliceZone'

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
      <SliceZone sliceZone={document.body} />
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
          body {
            __typename
            ...on PRISMIC_HomepageBodyText {
              type
              primary {
                columns
                content
              }
            }
            ...on PRISMIC_HomepageBodyQuote {
              type
              primary {
                quote
              }
            }
            ...on PRISMIC_HomepageBodyFull_width_image {
              type
              primary {
                full_width_image
                
              }
            }
            ...on PRISMIC_HomepageBodyImage_gallery {
              type
              primary {
                gallery_title
              }
              fields {
                image
                image_description
                link {
                  _linkType
                  ...on PRISMIC_Page {
                    _meta {
                      type
                      uid
                    }
                  }
                  ...on PRISMIC_Homepage {
                    _meta {
                      type
                    }
                  }
                }
                link_label
              }
            }
            ...on PRISMIC_HomepageBodyImage_highlight {
              type
              primary {
                featured_image
                title
                description
                link {
                  _linkType
                  ...on PRISMIC_Page {
                    _meta {
                      type
                      uid
                    }
                  }
                  ...on PRISMIC_Homepage {
                    _meta {
                      type
                    }
                  }
                }
                link_label
              }
            }
          }
        }
      }
    }
  }
}
`

export default Homepage
