import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'

const Homepage = ({ data }) => (
  <Layout isHomepage>
    <SEO title="Home" />
    <HomepageBanner backgroundImage={data.homeBanner} />

    <main className="container">
      <section className="content-section text-section-2col">
        <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
          mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper
          suscipit, posuere a, pede.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
          Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
          vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
          eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
        </p>
        <p>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
          ultricies in, diam. Sed arcu. Cras consequat.
        </p>
      </section>

      <section className="full-width-image content-section">
        <Img fluid={data.skiLiftChairs.childImageSharp.fluid} alt="Ski lift chairs" />
      </section>

      <section className="highlight content-section">
        <div className="highlight-left">
          <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
          <h3>
            Donec nec justo eget felis facilisis fermentum hendrerit. Phasellu aliquet nibh
            nec urna.
          </h3>
          <p>
            <Link to="/about">LEARN MORE</Link>
          </p>
        </div>
        <div className="highlight-right">
          <Img fluid={data.mountainRange.childImageSharp.fluid} alt="Mountain range" />
        </div>
      </section>

      <section className="content-section text-section-2col">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
          Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
          vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
          eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
        </p>
        <p>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero
          eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
          lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
          volutpat, lacus a ultrices sagittis.
        </p>
      </section>
    </main>
  </Layout>
)

export const query = graphql`
query {
  homeBanner: file(relativePath: { eq: "home-banner.jpg" }) {
    publicURL
  }
  skiLiftChairs: file(relativePath: { eq: "ski-lift-chairs.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 980, maxHeight: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  mountainRange: file(relativePath: { eq: "mountain-range.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 727, maxHeight: 403) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

Homepage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Homepage
