import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Text = ({ slice }) => {
  const columnClass = slice.primary.columns === '2 Columns'
    ? 'text-section-2col'
    : 'text-section-1col'

  return (
    <section className={`content-section ${columnClass}`}>
      <RichText
        render={slice.primary.content}
        linkResolver={linkResolver}
      />
    </section>
  )
}

export default Text
