import * as React from 'react'
import { graphql } from 'gatsby'

export const FullWidthImage = ({ slice }) => (
  <section className="full-width-image content-section">
    <img
      src={slice.primary.full_width_image.url}
      alt={slice.primary.full_width_image.alt}
    />
  </section>
)

export const query = graphql`
  fragment PageDataBodyFullWidthImage on PrismicPageDataBodyFullWidthImage {
    primary {
      full_width_image {
        url
      }
    }
  }
  fragment HomepageDataBodyFullWidthImage on PrismicHomepageDataBodyFullWidthImage {
    primary {
      full_width_image {
        url
      }
    }
  }
`
