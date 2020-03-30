import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HomepageBanner = ({ backgroundImage }) => (
  <section className="homepage-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundImage.publicURL})` }}>
    <div className="banner-content container">
      <h2 className="banner-title">John Doe</h2>
      <p className="banner-description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
        volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh,
        viverra non, semper suscipit, posuere a, pede asdf.
      </p>
      <Link to="/about" className="banner-button">Learn More</Link>
    </div>
  </section>
)

HomepageBanner.propTypes = {
  backgroundImage: PropTypes.object,
}

HomepageBanner.defaultProps = {
  backgroundImage: { publicURL: null },
}

export default HomepageBanner
