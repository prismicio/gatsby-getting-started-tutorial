import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './src/styles/reset.css'
import './src/styles/common.css'
import './src/styles/style.css'

const Layout = ({ isHomepage, children, navigation }) => (
  <>
    <Header isHomepage={isHomepage} navigation={navigation} />
    {children}
    <Footer />
  </>
)

export default Layout