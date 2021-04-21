import React, { useContext, useRef } from 'react';
import { AppContext } from '../context';

import Information from '@components/Information';
import InformationSideBar from '@components/InformationSideBar';

import '@styles/components/Information.css';

const InformationContainer = () => {
	const { state } = useContext(AppContext);
	const items = Object.keys(state.cart);

	const form = useRef(null);

	const handleSubmit = () => {
		const formData = new FormData(form.current);
		const buyerData = {
			name: formData.get('name'),
			email: formData.get('email'),
			address: formData.get('address'),
			apto: formData.get('apto'),
			city: formData.get('city'),
			country: formData.get('country'),
			state: formData.get('state'),
			cp: formData.get('cp'),
			phone: formData.get('phone'),
		};

		console.log(buyerData);
	};

	console.log(form);
	return (
		<div className='Information'>
			<Information formRef={form} submit={handleSubmit} />
			<InformationSideBar items={items} cart={state.cart} />
		</div>
	);
};

export default InformationContainer;
