import React, { useContext } from 'react';
import { AppContext } from '../context';

import Map from '@components/Map';

const SuccessContainer = () => {
	const { state } = useContext(AppContext);

	return (
		<section className='Success'>
			<div className='Success-content'>
				<h2>{state.buyer.name}, Thank You for The Purchase!</h2>
				<span>Your order will arrive about 3 days to your address</span>
				<div className='Success-map'>
					<Map />
				</div>
			</div>
		</section>
	);
};

export default SuccessContainer;
