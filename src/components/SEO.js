import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const Seo = ({ description, title }) => {
  const queryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaTitle = title
    ? `${title} | ${queryData.site?.siteMetadata?.title}`
    : queryData.site?.siteMetadata?.title
  const metaDescription =
    description || queryData.site?.siteMetadata?.description

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}
