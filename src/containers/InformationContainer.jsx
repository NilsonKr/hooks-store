import React, { useContext } from 'react';
import { AppContext } from '../context';

import Information from '@components/Information';
import InformationSideBar from '@components/InformationSideBar';

import '@styles/components/Information.css';

const InformationContainer = () => {
	const { state } = useContext(AppContext);
	const items = Object.keys(state.cart);

	return (
		<div className='Information'>
			<Information />
			<InformationSideBar items={items} cart={state.cart} />
		</div>
	);
};

export default InformationContainer;
