import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from '../utils/linkResolver'

export const Text = ({ slice }) => {
  const columnClass =
    slice.primary.columns === '2 Columns'
      ? 'text-section-2col'
      : 'text-section-1col'

  return (
    <section className={`content-section ${columnClass}`}>
      <RichText
        render={slice.primary.content.raw}
        linkResolver={linkResolver}
      />
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyText on PrismicPageDataBodyText {
    primary {
      columns
      content {
        raw
      }
    }
  }
  fragment HomepageDataBodyText on PrismicHomepageDataBodyText {
    primary {
      columns
      content {
        raw
      }
    }
  }
`
