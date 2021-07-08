import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

import 'gatsby-plugin-prismic-previews/dist/styles.css'

import './src/styles/reset.css'
import './src/styles/common.css'
import './src/styles/style.css'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
)
