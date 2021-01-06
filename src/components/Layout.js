import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './../styles/reset.css'
import './../styles/common.css'
import './../styles/style.css'

const Layout = ({ isHomepage, children, navigation }) => (
  <>
    <Header isHomepage={isHomepage} navigation={navigation} />
    {children}
    <Footer />
  </>
)

export default Layout