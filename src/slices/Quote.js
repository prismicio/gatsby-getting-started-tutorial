import * as React from 'react'
import { graphql } from 'gatsby'

export const Quote = ({ slice }) => (
  <section className="content-section quote">
    <blockquote>{slice.primary.quote.text}</blockquote>
  </section>
)

export const query = graphql`
  fragment PageDataBodyQuote on PrismicPageDataBodyQuote {
    primary {
      quote {
        text
      }
    }
  }
  fragment HomepageDataBodyQuote on PrismicHomepageDataBodyQuote {
    primary {
      quote {
        text
      }
    }
  }
`
