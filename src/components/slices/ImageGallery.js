import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const ImageGallery = ({ slice }) => (
  <section className="image-gallery content-section">
    <RichText render={slice.primary.gallery_title} />
    <div className="gallery">
      {slice.fields.map((galleryItem, index) => (
        <div className="gallery-item" key={`gallery-item=${index}`}>
          <img
            src={galleryItem.image.url}
            alt={galleryItem.image.alt}
          />
          <RichText render={galleryItem.image_description} />
          {galleryItem.link && galleryItem.link._meta
            ? (
              <p className="gallery-link">
                <Link to={linkResolver(galleryItem.link._meta)}>
                  {RichText.asText(galleryItem.link_label)}
                </Link>
              </p>
            )
            : null}
        </div>
      ))}
    </div>
  </section>
)

export default ImageGallery
