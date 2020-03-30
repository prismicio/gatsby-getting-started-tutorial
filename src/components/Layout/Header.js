import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ isHomepage }) => {
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <header className={`site-header ${homepageClass}`}>
      <a href="./index.html"><div className="logo">Example Site</div></a>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/more-info">More Info</Link></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  isHomepage: PropTypes.bool,
}

Header.defaultProps = {
  isHomepage: false,
}

export default Header
