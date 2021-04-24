import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../context';
import getTotalPrice from '../utils/getTotalPrice';

import { PayPalButton } from 'react-paypal-button-v2';

import '@styles/components/Payment.css';

const PaymentContainer = () => {
	const { state, setOrder } = useContext(AppContext);
	const history = useHistory();
	const { cart } = state;
	const items = Object.keys(state.cart);

	const paypalOptions = {
		clientId: process.env.CLIENTID,
		currency: 'USD',
	};

	const buttonStyles = {
		layout: 'vertical',
		color: 'blue',
		shape: 'pill',
		label: 'pay',
	};

	//Handle new order success
	const handleApprove = data => {
		if (data.status === 'COMPLETED') {
			const newOrder = {
				buyer: { ...state.buyer },
				products: { ...state.cart },
				order: data,
			};

			setOrder(newOrder);

			history.push('/checkout/success');
		}
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
					amount={getTotalPrice(cart) + 1}
					onSuccess={handleApprove}
					onError={error => console.log(error)}
					onCancel={data => console.log(data)}
				/>
				<Link to='/checkout/success' className='Payment-skip'>
					Skip Payment
				</Link>
			</div>
		</div>
	);
};

export default PaymentContainer;
