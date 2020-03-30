import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ isHomepage, children }) => (
  <>
    <Header isHomepage={isHomepage} />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  isHomepage: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  isHomepage: false,
}

export default Layout
