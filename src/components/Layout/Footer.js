import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer = () => (
  <StaticQuery
    query={footerQuery}
    render={(data) => (
      <footer>
        <p>
          Proudly published with <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Prismic</a>
          <br />
          <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
            <img className="footer-logo" src={data.prismicLogo.publicURL} alt="Prismic logo" />
          </a>
        </p>
      </footer>
    )}
  />
)

const footerQuery = graphql`
query {
  prismicLogo: file(relativePath: { eq: "logo-prismic.svg" }) {
    publicURL
  }
}
`

export default Footer
