import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { graphql, useStaticQuery } from 'gatsby'
import linkResolver from '../utils/linkResolver'

const PreviewPage = ({ isPreview }) => {
  if (isPreview === false) return 'Not a preview!'

  return <p>Loading</p>
}

export default (props) => {
  const data = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "gatsby-source-prismic" }) {
        pluginOptions {
          repositoryName
        }
      }
    }
  `)
  const { repositoryName } = data.sitePlugin.pluginOptions
  return withPrismicPreviewResolver(PreviewPage, [
    {
      repositoryName: repositoryName,
      linkResolver,
    },
  ])(props)
}
