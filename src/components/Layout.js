import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ isHomepage, children, navigation }) => (
  <>
    <Header isHomepage={isHomepage} navigation={navigation} />
    {children}
    <Footer />
  </>
)

export default Layout
