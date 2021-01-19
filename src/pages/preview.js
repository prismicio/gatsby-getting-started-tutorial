import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import { linkResolver } from '../example_path_to_linkResolver'
import { Layout } from '../components/Layout'

const PreviewPage = ({ isPreview, isLoading }) => {
  const previewText = isPreview ? 'Loading' : 'Not a preview!'
  return (
    <Layout>
      <p>{previewText}</p>
    </Layout>
  )
}

export default withPreviewResolver(PreviewPage, {
    /* Make sure that you update the repositoryName 
    * to match the name of your Prismic repository */
  repositoryName: 'your-repo-name',
  linkResolver,
})