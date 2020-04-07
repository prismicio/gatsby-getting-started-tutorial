import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'
import MainContent from '../components/MainContent'

const Homepage = () => {
  return (
    <Layout isHomepage>
      <SEO title="Home" />
      <HomepageBanner />
      <MainContent />
    </Layout>
  )
}

export default Homepage
