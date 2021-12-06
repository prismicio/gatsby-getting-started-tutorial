import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

export const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <PrismicRichText field={slice.primary.title.richText} />
      <PrismicRichText field={slice.primary.description.richText} />
      <p>
        <PrismicLink href={slice.primary.link.url}>
          {slice.primary.link_label.text}
        </PrismicLink>
      </p>
    </div>
    <div className="highlight-right">
      <img
        src={slice.primary.featured_image.url}
        alt={slice.primary.featured_image.alt}
      />
    </div>
  </section>
)

export const query = graphql`
  fragment PageDataBodyImageHighlight on PrismicPageDataBodyImageHighlight {
    primary {
      featured_image {
        url
        alt
      }
      title {
        richText
      }
      description {
        richText
      }
      link {
        url
        type
        uid
      }
      link_label {
        text
      }
    }
  }
  fragment HomepageDataBodyImageHighlight on PrismicHomepageDataBodyImageHighlight {
    primary {
      featured_image {
        url
        alt
      }
      title {
        richText
      }
      description {
        richText
      }
      link {
        url
        type
        uid
      }
      link_label {
        text
      }
    }
  }
`
