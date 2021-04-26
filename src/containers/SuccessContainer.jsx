import React, { useContext } from 'react';
import { AppContext } from '../context';
import useAddress from '@hooks/useAddress';

import Map from '@components/Map';

import '@styles/components/Success.css';

const SuccessContainer = () => {
	const { state } = useContext(AppContext);
	const location = useAddress(state.buyer.address);

	return (
		<section className='Success'>
			<div className='Success-content'>
				{Object.keys(state.buyer).length > 0 && (
					<>
						<h2>{state.buyer.name}, Thank You for The Purchase!</h2>
						<span>Your order will arrive about 3 days to your address</span>
						<div className='Success-map'>
							{Object.keys(location).length && <Map cordinates={location} />}
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default SuccessContainer;
