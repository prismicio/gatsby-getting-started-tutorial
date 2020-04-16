import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { linkResolver, withPreview } from 'gatsby-source-prismic-graphql'
import { RichText } from 'prismic-reactjs'

const Header = ({ isHomepage }) => {
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <StaticQuery
      query={`${headerQuery}`}
      render={withPreview((data) => {
        const prismicContent = data.prismic.allNavigations.edges[0]
        if (!prismicContent) return null
        const document = prismicContent.node

        return (
          <header className={`site-header ${homepageClass}`}>
            <Link to="/"><div className="logo">Example Site</div></Link>
            <nav>
              <ul>
                {document.top_navigation.map((navItem, index) => {
                  const linkTo = linkResolver(navItem.link._meta)
                  const linkLabel = RichText.asText(navItem.link_label)
                  return (
                    <li key={`link-${index}`}>
                      <Link to={linkTo}>{linkLabel}</Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </header>
        )
      }, headerQuery)}
    />
  )
}

const headerQuery = graphql`
{
  prismic {
    allNavigations {
      edges {
        node {
          top_navigation {
            link {
              ...on PRISMIC_Homepage {
                _meta {
                  type
                }
              }
              ...on PRISMIC_Page {
                _meta {
                  type
                  uid
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
`

export default Header
