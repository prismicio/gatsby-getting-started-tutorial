import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import skiLiftChairs from '../images/ski-lift-chairs.jpeg'
import mountainRange from '../images/mountain-range.jpeg'
import forrestAerialShot from '../images/forrest-aerial-shot.jpeg'

const About = () => (
  <Layout>
    <Seo
      title="About"
      description="Learn more about us who we are and what we do."
    />

    <main className="container">
      <section className="full-width-image content-section">
        <img src={skiLiftChairs} alt="Ski lift chairs" />
      </section>

      <section className="content-section text-section-2col">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
      </section>

      <section className="content-section text-section-col-1">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Ut scelerisque
          hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida
          tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat
          est. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a
          mauris eget arcu gravida tristique.
        </p>
      </section>

      <section className="content-section quote">
        <blockquote>Lorem ipsum dolor site amet</blockquote>
      </section>

      <section className="content-section text-section-1col">
        <p>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis. Suspendisse mauris. Fusce accumsan mollis
          eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer
          adipiscing risus a sem. Nullam quis massa sit amet nibh viverra
          malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel,
          arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a
          mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus
          imperdiet nibh feugiat est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis. Suspendisse mauris. Fusce accumsan mollis eros.
          Pellentesque a diam sit amet mi ullamcorper vehicula. Integer
          adipiscing risus a sem.
        </p>
      </section>

      <section className="image-gallery content-section">
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="gallery">
          <div className="gallery-item">
            <img src={forrestAerialShot} alt="Forrest aerial shot" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, <em>aliquet vel</em>, dapibus id, mattis vel, nisi.
            </p>
            <p className="gallery-link">
              <Link to="/more-info">Learn More</Link>
            </p>
          </div>
          <div className="gallery-item">
            <img src={mountainRange} alt="Mountain range" />
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est.
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)


export default About
