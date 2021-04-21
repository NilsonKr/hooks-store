import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = payload => {
		const item = state.cart[payload.title];

		//Set the new Quantity
		const newItem = {
			...payload,
			quantity: item ? (item.quantity += 1) : 1,
			totalPrice: item ? item.price * item.quantity : 0,
		};

		setState({
			...state,
			cart: { ...state.cart, [payload.title]: newItem },
		});
	};

	const removeFromCart = payload => {
		const isMoreThanOne = payload.quantity > 1 ? true : false;

		if (isMoreThanOne) {
			setState({
				...state,
				cart: {
					...state.cart,
					[payload.title]: { ...payload, quantity: payload.quantity - 1 },
				},
			});
		} else {
			const newState = { ...state, cart: { ...state.cart } };

			delete newState.cart[payload.title];

			console.log(newState);

			// setState({
			// 	...state,
			// 	cart: {
			// 		...state.cart,
			// 		delete
			// 	}
			// })
		}
	};

	return { state, addToCart, removeFromCart };
};

export default useInitialState;
