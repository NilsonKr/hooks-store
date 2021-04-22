import React, { useContext } from 'react';
import { AppContext } from '../context';
import getTotalPrice from '../utils/getTotalPrice';

import { PayPalButton } from 'react-paypal-button-v2';

import '@styles/components/Payment.css';

const PaymentContainer = () => {
	const { state } = useContext(AppContext);
	const { cart } = state;
	const items = Object.keys(state.cart);

	const paypalOptions = {
		clientId: process.env.CLIENTID,
		currency: 'USD',
	};

	const buttonStyles = {
		color: 'blue',
		shape: 'pill',
		label: 'pay',
	};

	return (
		<div className='Payment'>
			<div className='Payment-content'>
				<h2>Order Summary: </h2>
				{items.map(name => (
					<div className='Payment-item' key={cart[name].id}>
						<div className='Payment-element'>
							<h3>{cart[name].title}</h3>
							<span>
								{cart[name].quantity} X ${cart[name].totalPrice}
							</span>
						</div>
					</div>
				))}
				<div className='Payment-button'>TOTAL PRICE: ${getTotalPrice(cart)}</div>
				<PayPalButton
					options={paypalOptions}
					style={buttonStyles}
					amount={getTotalPrice(cart)}
					onApprove={data => console.log(data)}
					onSuccess={data => console.log(data)}
					onError={error => console.log(error)}
				/>
			</div>
		</div>
	);
};

export default PaymentContainer;
