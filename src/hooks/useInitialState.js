import React, {useState} from 'react';
import initialState from '../initialState';

const useInitialState = () => {
	const [products, setProducts] = useState(initialState);

	const addToCart = payload => {
		setProducts({
			...products,
			cart: [...products.cart, payload],
		});
	};

	const removeFromCard = payload => {
		setProducts({
			...products,
			cart: products.cart.filter(item => item.id !== payload.id),
		});
	};

	return {products, addToCart, removeFromCard};
};

export default useInitialState;
