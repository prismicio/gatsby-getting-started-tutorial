import React from 'react'
import { RichText } from 'prismic-reactjs'
import linkResolver from './../../utils/linkResolver'

const Text = ({ slice }) => {
  const columnClass = slice.primary.columns === '2 Columns'
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

export default Text