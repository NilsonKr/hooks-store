import React, { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context';
import validateInfo from '../utils/validateInfo';

import Information from '@components/Information';
import InformationSideBar from '@components/InformationSideBar';

import '@styles/components/Information.css';

const InformationContainer = () => {
	const [error, setError] = useState(null);
	const { state, setBuyer } = useContext(AppContext);
	const items = Object.keys(state.cart);
	const history = useHistory();

	const form = useRef(null);

	//Get Data from form
	const handleSubmit = async () => {
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

		const isValid = await validateInfo(buyerData);

		if (isValid.approve) {
			setBuyer(buyerData);

			history.push('/checkout/payment');
		} else {
			setError(isValid.error);
		}
	};

	return (
		<div className='Information'>
			<Information formRef={form} submit={handleSubmit} />
			<InformationSideBar items={items} cart={state.cart} />
			{error && <h2 className='Information-error'>{error}</h2>}
		</div>
	);
};

export default InformationContainer;
