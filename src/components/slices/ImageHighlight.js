import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <RichText render={slice.primary.title.raw} />
      <RichText render={slice.primary.description.raw} />
      {slice.primary.link && slice.primary.link ? (
        <p>
          <Link to={slice.primary.link.url}>
            {RichText.asText(slice.primary.link_label.raw)}
          </Link>
        </p>
      ) : null}
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