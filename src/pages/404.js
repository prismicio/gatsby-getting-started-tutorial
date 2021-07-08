import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found" />
    <div className="container">
      <h1>Oh no!</h1>
      <h3>We can't seem to find the page you're looking for.</h3>
      <br />
    </div>
  </Layout>
)

export default NotFoundPage
