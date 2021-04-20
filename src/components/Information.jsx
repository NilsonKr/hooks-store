import React from 'react';

const Information = props => (
  <>
    <div className="Information-content">
      <div className="Information-head">
        <h2>Contact Information: </h2>
      </div>
      <div className="Information-form">
        <form action="">
          <input type="text" placeholder="Full Name" name="name" />
          <input type="text" placeholder="E-Mail" name="email" />
          <input type="text" placeholder="Address" name="addres" />
          <input type="text" placeholder="APT" name="apto" />
          <input type="text" placeholder="City" name="city" />
          <input type="text" placeholder="Country" name="country" />
          <input type="text" placeholder="State" name="state" />
          <input type="text" placeholder="Postal Code" name="cp" />
          <input type="text" placeholder="Phone Number" name="phone" />
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Information-back">Go Back</div>
        <div className="Information-next">Pay</div>
      </div>
    </div>
    <div className="Information-sidebar">
      <h3>Order Summary:</h3>
      <div className="Information-item">
        <div className="Information-element">
          <h4>ITEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </>
);


export default Information
