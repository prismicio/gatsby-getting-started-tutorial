import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import sunThroughTrees from '../images/sun-through-trees.jpg'
import benchInForrest from '../images/bench-in-forrest.jpg'

const MoreInfo = () => (
  <Layout>
    <Seo
      title="More Info"
      description="Want to learn more? Get the answer to all your questions here."
    />

    <main className="container">
      <section className="full-width-image content-section">
        <img src={sunThroughTrees} alt="Sun through the trees" />
      </section>

      <section className="content-section text-section-1col">
        <h1>More Info</h1>
        <h2>Morbi interdum mollis sapien</h2>
        <p>
          Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet,{' '}
          <Link to="/">lectus arcu pulvinar risus</Link>, vitae{' '}
          <strong>facilisis libero dolor a purus</strong>. Sed vel lacus. Mauris
          nibh felis, <em>adipiscing varius</em>, adipiscing in,{' '}
          <strong>
            <em>lacinia vel</em>
          </strong>
          , tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
          Nunc tellus ante, mattis neget, gravida vitae, ultricies ac, leo.
          Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
        </p>
      </section>

      <section className="content-section quote">
        <blockquote>Etiam pellentesque mauris ut lectus</blockquote>
      </section>

      <section className="content-section text-section-1col">
        <p>
          Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam
          sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem.
          Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus,
          accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque
          hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida
          tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat
          est.
        </p>
      </section>

      <section className="full-width-image content-section">
        <img src={benchInForrest} alt="Bench in the forrest" />
      </section>

      <section className="content-section text-section-2col">
        <p>
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas
          augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui
          mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
        </p>
        <p>
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus.
        </p>
        <p>
          Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
          ultrices ut, elementum vulputate, nunc.
        </p>
        <p>
          Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis
          vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo
          ullamcorper magna.
        </p>
      </section>
    </main>
  </Layout>
)

export default MoreInfo