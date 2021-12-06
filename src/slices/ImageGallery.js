import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

export const ImageGallery = ({ slice }) => {
  return (
    <section className="image-gallery content-section">
      <PrismicRichText field={slice.primary.gallery_title.richText} />
      <div className="gallery">
        {slice.items.map((galleryItem, index) => (
          <div className="gallery-item" key={`gallery-item=${index}`}>
            <img src={galleryItem.image.url} alt={galleryItem.image.alt} />
            <PrismicRichText field={galleryItem.image_description.richText} />
            <p className="gallery-link">
              <PrismicLink href={galleryItem.link.url}>
                {galleryItem.link_label.text}
              </PrismicLink>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyImageGallery on PrismicPageDataBodyImageGallery {
    primary {
      gallery_title {
        richText
      }
    }
    items {
      image {
        url
        alt
      }
      image_description {
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
  fragment HomepageDataBodyImageGallery on PrismicHomepageDataBodyImageGallery {
    primary {
      gallery_title {
        richText
      }
    }
    items {
      image {
        url
        alt
      }
      image_description {
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
