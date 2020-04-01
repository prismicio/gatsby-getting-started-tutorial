import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const About = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      description="Learn more about us who we are and what we do."
    />

    <main className="container">
      <section className="full-width-image content-section">
        <Img fluid={data.skiLiftChairs.childImageSharp.fluid} alt="Ski lift chairs" />
      </section>

      <section className="content-section text-section-2col">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
          mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper
          suscipit, posuere a, pede.
        </p>
      </section>

      <section className="content-section text-section-col-1">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
          Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
          vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
          leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
          Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida
          tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est. Ut scelerisque
          hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique.
        </p>
      </section>

      <section className="content-section quote">
        <blockquote>Lorem ipsum dolor site amet</blockquote>
      </section>

      <section className="content-section text-section-1col">
        <p>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
          est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
          Vestibulum volutpat, lacus a ultrices sagittis. Suspendisse mauris. Fusce accumsan
          mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing
          risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan
          quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis.
          Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet
          nibh feugiat est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
          felis. Vestibulum volutpat, lacus a ultrices sagittis. Suspendisse mauris. Fusce accumsan
          mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing
          risus a sem.
        </p>
      </section>

      <section className="image-gallery content-section">
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="gallery">
          <div className="gallery-item">
            <div className="gallery-image">
              <Img fluid={data.forrestAerialShot.childImageSharp.fluid} alt="Forrest aerial shot" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, <em>aliquet vel</em>, dapibus
              id, mattis vel, nisi.
            </p>
            <p className="gallery-link">
              <Link to="/more-info">Learn More</Link>
            </p>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <Img fluid={data.mountainRange.childImageSharp.fluid} alt="Mountain range" />
            </div>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
              metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis,
              gravida id, est.
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export const query = graphql`
query {
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
  forrestAerialShot: file(relativePath: { eq: "forrest-aerial-shot.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 727, maxHeight: 403) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About
