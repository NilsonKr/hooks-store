import React, {useContext} from 'react';
import {AppContext} from '../context';

import Product from './Product';

import '@styles/components/Products.css';

const Products = () => {
	const {state, addToCart} = useContext(AppContext);

	const handleAddToCart = product => () => {
		addToCart(product);
	};

	return (
		<section className='Products'>
			<div className='Products-items'>
				{state.products.map(product => (
					<Product key={product.id} product={product} add={handleAddToCart} />
				))}
			</div>
		</section>
	);
};

export default Products;
