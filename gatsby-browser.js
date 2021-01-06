import './src/styles/reset.css'
import './src/styles/common.css'
import './src/styles/style.css'

import { registerLinkResolver } from 'gatsby-source-prismic-graphql'
import linkResolver from './src/utils/linkResolver'

registerLinkResolver(linkResolver)
