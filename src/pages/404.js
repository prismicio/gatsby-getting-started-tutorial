// import * as React from 'react'
// import { graphql } from 'gatsby'
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
// import HomeTemplate from './index'
import Page from './../templates/Page'

import linkResolver from '../utils/linkResolver'

// const NotFoundPage = ({ data }) => {
//   const page = data.prismicPage

//   return (
//     <div>
//       <h1>no</h1>
//     </div>
//   )
// }


export default withPrismicUnpublishedPreview(Page, [
  {
    repositoryName: 'gatsbygts',
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: Page,
    }),
  },
])

// export const query = graphql`
//   query NotFoundPage {
//     prismicPage(id: { eq: "404" }) {
//       _previewable
//       data {
//         title {
//           text
//         }
//       }
//     }
//   }
// `