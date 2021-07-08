import * as React from 'react'
import { Link } from 'gatsby'

export const Header = ({ isHomepage }) => {
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/">
        <div className="logo">Example Site</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/more-info">More Info</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
