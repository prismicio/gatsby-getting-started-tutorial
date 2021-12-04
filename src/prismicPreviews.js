import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'

import HomeTemplate from './pages/index'
import PageTemplate from './pages/{PrismicPage.url}'

import { linkResolver } from './linkResolver'

export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      homepage: HomeTemplate,
      page: PageTemplate,
    }),
  },
]
