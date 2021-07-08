import * as React from 'react'
import { Link } from 'gatsby'

import skiLiftChairs from '../images/ski-lift-chairs.jpeg'
import mountainRange from '../images/mountain-range.jpeg'
import mountainsAndFjords from '../images/mountains-and-fjords.jpg'
import forrestAerialShot from '../images/forrest-aerial-shot.jpeg'

export const MainContent = () => (
  <main className="container">
    <section className="content-section text-section-2col">
      <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </p>
      <p>
        Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
        in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
      </p>
    </section>

    <section className="full-width-image content-section">
      <img src={skiLiftChairs} alt="Ski lift chairs" />
    </section>

    <section className="highlight content-section">
      <div className="highlight-left">
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
        <h3>
          Donec nec justo eget felis facilisis fermentum hendrerit. Phasellu
          aliquet nibh nec urna.
        </h3>
        <p>
          <Link to="/about">LEARN MORE</Link>
        </p>
      </div>
      <div className="highlight-right">
        <img src={mountainRange} alt="Mountain range" />
      </div>
    </section>

    <section className="content-section text-section-1col">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis.
      </p>
    </section>

    <section className="content-section quote">
      <blockquote>Praesent elementum hendrerit tortor</blockquote>
    </section>

    <section className="image-gallery content-section">
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className="gallery">
        <div className="gallery-item">
          <img src={mountainsAndFjords} alt="Mountains and fjords" />
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est.
          </p>
          <p className="gallery-link">
            <Link to="/about">Learn More</Link>
          </p>
        </div>
        <div className="gallery-item">
          <img src={forrestAerialShot} alt="Forrest aerial shot" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,{' '}
            <em>aliquet vel</em>, dapibus id, mattis vel, nisi.
          </p>
          <p className="gallery-link">
            <Link to="/more-info">More Info</Link>
          </p>
        </div>
      </div>
    </section>
  </main>
)
