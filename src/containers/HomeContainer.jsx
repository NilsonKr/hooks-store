import React from 'react';
import initialState from '../initialState'

import Products from '@components/Products'


const HomeContainer = () => {
  return (
    <React.Fragment>
      <Products products={initialState.products}/>
    </React.Fragment>
  )
}

export default HomeContainer
