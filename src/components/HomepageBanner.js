import * as React from 'react'
import { Link } from 'gatsby'

export const HomepageBanner = ({
  title,
  description,
  linkUrl,
  linkLabel,
  backgroundUrl,
}) => (
  <section
    className="homepage-banner"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
    }}
  >
    <div className="banner-content container">
      <h2 className="banner-title">{title}</h2>
      <p className="banner-description">{description}</p>
      <Link to={linkUrl} className="banner-button">
        {linkLabel}
      </Link>
    </div>
  </section>
)
