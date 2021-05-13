import * as React from 'react'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

import { unpublishedRepositoryConfigs } from '../utils/prismicUnpublishedPreviews'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  )
}

export default withPrismicUnpublishedPreview(
  NotFoundPage,
  unpublishedRepositoryConfigs,
)
