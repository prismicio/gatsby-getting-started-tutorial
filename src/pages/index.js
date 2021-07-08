import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { MainContent } from '../components/MainContent'

const Homepage = () => (
  <Layout isHomepage>
    <Seo title="Home" />
    <HomepageBanner />
    <MainContent />
  </Layout>
)

export default Homepage