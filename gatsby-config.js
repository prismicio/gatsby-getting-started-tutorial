module.exports = {
  siteMetadata: {
    title: 'Gatsby + Prismic Tutorial',
    description: 'Learn how to integrate Prismic into your Gatsby project.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            variants: ['400', '400i', '700', '700i', '900'],
          },
          {
            family: 'Amiri',
            variants: ['400', '400i', '700', '700i'],
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'your-repo-name',
      },
    },
  ],
}
