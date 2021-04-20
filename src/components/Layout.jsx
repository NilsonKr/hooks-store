import React from 'react';

import Header from '@components/Header'
import Footer from '@components/Footer'

import '@styles/components/Layout.css'

const Layout = props => {
  return (
    <div className="Main">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
