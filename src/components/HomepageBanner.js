import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const HomepageBanner = ({ bannerContent }) => (
  <section
    className="homepage-banner"
    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${bannerContent.background.url})` }}
  >
    <div className="banner-content container">
      <h2 className="banner-title">{RichText.asText(bannerContent.title)}</h2>
      <p className="banner-description">{RichText.asText(bannerContent.description)}</p>
      <Link
        to={linkResolver(bannerContent.link._meta)}
        className="banner-button"
      >
        {RichText.asText(bannerContent.linkLabel)}
      </Link>
    </div>
  </section>
)

export default HomepageBanner
