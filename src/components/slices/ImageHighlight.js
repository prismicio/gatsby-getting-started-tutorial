import * as React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'

export const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <RichText render={slice.primary.title.raw} />
      <RichText render={slice.primary.description.raw} />
      <p>
        <Link to={slice.primary.link.url}>
          {RichText.asText(slice.primary.link_label.raw)}
        </Link>
      </p>
    </div>
    <div className="highlight-right">
      <img
        src={slice.primary.featured_image.url}
        alt={slice.primary.featured_image.alt}
      />
    </div>
  </section>
)
