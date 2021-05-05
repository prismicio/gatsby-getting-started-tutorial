const linkResolver = require('./src/utils/linkResolver')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Prismic Tutorial',
    description: 'Learn how to integrate Prismic into your Gatsby project.',
  },
  plugins: [
    {
      resolve:"gatsby-plugin-prismic-previews",
      options:{
        repositoryName: process.env.PRISMIC_REPO_NAME,
        toolbar:"new"
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        /* Make sure that you update the repositoryName 
        * to match the name of your Prismic repository */
        repositoryName: process.env.PRISMIC_REPO_NAME,
        linkResolver: (doc) => linkResolver(doc),
        schemas: {
           homepage: require("./custom_types/homepage.json"),
           navigation: require("./custom_types/navigation.json"),
           page: require("./custom_types/page.json"),
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Lato\:400,400,700,700i,900`,`Amiri\:400,400,700,700i`
        ],
      },
    },
  ],
}
