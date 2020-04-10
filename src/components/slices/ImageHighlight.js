import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <RichText render={slice.primary.title} />
      <RichText render={slice.primary.description} />
      {slice.primary.link && slice.primary.link._meta
        ? (
          <p>
            <Link to={linkResolver(slice.primary.link._meta)}>
              {RichText.asText(slice.primary.link_label)}
            </Link>
          </p>
        )
        : null}
    </div>
    <div className="highlight-right">
      <img
        src={slice.primary.featured_image.url}
        alt={slice.primary.featured_image.alt}
      />
    </div>
  </section>
)

export default ImageHighlight
