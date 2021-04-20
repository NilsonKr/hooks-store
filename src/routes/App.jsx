import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@containers/HomeContainer.jsx'
import Checkout from '@containers/CheckoutContainer.jsx'
import Information from '@containers/InformationContainer.jsx'
import Success from '@containers/SuccessContainer.jsx'
import Payment from '@containers/PaymentContainer.jsx'
import NotFound from '@containers/NotFound.jsx'



const App = () => {
  return (
    <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/checkout' component={Checkout}/>
        <Route exact path='/checkout/payment' component={Payment}/>
        <Route exact path='/checkout/information' component={Information}/>
        <Route exact path='/checkout/success' component={Success}/>
        <Route exact  component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App


