import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const ImageGallery = ({ slice }) => {
  return (
    <section className="image-gallery content-section">
      <RichText render={slice.primary.gallery_title.raw} />
      <div className="gallery">
        {slice.items.map((galleryItem, index) => (
          <div className="gallery-item" key={`gallery-item=${index}`}>
            <img src={galleryItem.image.url} alt={galleryItem.image.alt} />
            <RichText render={galleryItem.image_description.raw} />
            {galleryItem.link && galleryItem.link ? (
              <p className="gallery-link">
                <Link to={galleryItem.link.url}>
                  {RichText.asText(galleryItem.link_label.raw)}
                </Link>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageGallery