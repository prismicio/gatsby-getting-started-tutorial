import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

export const ImageGallery = ({ slice }) => {
  return (
    <section className="image-gallery content-section">
      <RichText render={slice.primary.gallery_title.raw} />
      <div className="gallery">
        {slice.items.map((galleryItem, index) => (
          <div className="gallery-item" key={`gallery-item=${index}`}>
            <img src={galleryItem.image.url} alt={galleryItem.image.alt} />
            <RichText render={galleryItem.image_description.raw} />
            <p className="gallery-link">
              <Link to={galleryItem.link.url}>
                {RichText.asText(galleryItem.link_label.raw)}
              </Link>
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
        raw
      }
    }
    items {
      image {
        url
        alt
      }
      image_description {
        raw
      }
      link {
        url
        type
        uid
      }
      link_label {
        raw
      }
    }
  }
  fragment HomepageDataBodyImageGallery on PrismicHomepageDataBodyImageGallery {
    primary {
      gallery_title {
        raw
      }
    }
    items {
      image {
        url
        alt
      }
      image_description {
        raw
      }
      link {
        url
        type
        uid
      }
      link_label {
        raw
      }
    }
  }
`
