import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/';
import getTotalPrice from '../utils/getTotalPrice';

import '@styles/components/Checkout.css';

const CheckoutContainer = () => {
	const { state, removeFromCart } = useContext(AppContext);
	const { cart } = state;
	const items = Object.keys(state.cart);

	return (
		<div className='Checkout'>
			<div className='Checkout-content'>
				<h3>Lista de Pedidos:</h3>
				{items.map(name => (
					<div className='Checkout-item' key={cart[name].id}>
						<div className='Checkout-element'>
							<h4>{cart[name].title}</h4>
							<span>
								{cart[name].quantity} X ${cart[name].totalPrice}
							</span>
						</div>
						<i
							className='fas fa-trash-alt'
							title='Delete'
							onClick={() => removeFromCart(cart[name])}
						></i>
					</div>
				))}
			</div>
			{items.length > 0 && (
				<div className='Checkout-sidebar'>
					<h3>Total Price: ${getTotalPrice(cart)}</h3>
					<Link to='/checkout/information'>
						<button type='button'>Continuar pedido</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default CheckoutContainer;
