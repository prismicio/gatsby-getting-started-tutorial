import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const Header = ({ isHomepage }) => {
  const queryData = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          top_navigation {
            link {
              type
              uid
              url
            }
            link_label {
              raw
            }
          }
        }
      }
    }
  `)

  const navigation = queryData.prismicNavigation
  const topNav = navigation.data.top_navigation

  const homepageClass = isHomepage ? 'homepage-header' : ''

  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/">
        <div className="logo">Example Site</div>
      </Link>
      <nav>
        <ul>
          {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                <Link to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.raw)}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
