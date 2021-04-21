import React from 'react';

import '@styles/components/Payment.css'

const PaymentContainer = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h2>Order Summary: </h2>
        <div className="Paymen-button">
          Pay With PayPal
        </div>
      </div>
    </div>
  )
}

export default PaymentContainer
