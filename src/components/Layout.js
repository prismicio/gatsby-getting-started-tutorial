import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ isHomepage, children }) => (
  <>
    <Header isHomepage={isHomepage} />
    {children}
    <Footer />
  </>
)

export default Layout
