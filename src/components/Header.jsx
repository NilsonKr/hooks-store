import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

import '@styles/components/Header.css';

const Header = () => {
	const { state } = useContext(AppContext);
	const items = Object.keys(state.cart);

	return (
		<header className='Header'>
			<Link to='/' className='Header-title'>
				<h1>HookStore </h1>
			</Link>
			<div className='Header-checkout'>
				<Link to='/checkout'>
					<i className='fas fa-shopping-basket fa-2x' title='Checkout' />
				</Link>
				{items.length > 0 && <h3 className='Header-alert'>{items.length}</h3>}
			</div>
		</header>
	);
};

export default Header;
