import * as React from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ isHomepage, children }) => (
  <>
    <Header isHomepage={isHomepage} />
    {children}
    <Footer />
  </>
)
