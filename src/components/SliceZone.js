import React from 'react'
import FullWidthImage from './slices/FullWidthImage'
import ImageGallery from './slices/ImageGallery'
import ImageHighlight from './slices/ImageHighlight'
import Quote from './slices/Quote'
import Text from './slices/Text'

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    full_width_image: FullWidthImage,
    image_gallery: ImageGallery,
    image_highlight: ImageHighlight,
    quote: Quote,
    text: Text,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return <main className="container">{sliceZoneContent}</main>
}

export default SliceZone
