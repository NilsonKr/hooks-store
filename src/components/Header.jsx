import React from 'react';
import {Link} from 'react-router-dom';

import '@styles/components/Header.css';

const Header = () => {
	return (
		<header className='Header'>
			<Link to='/' className='Header-title'>
				<h1>HookStore </h1>
			</Link>
			<Link to='/checkout' className='Header-checkout'>
				<i className='fas fa-shopping-basket fa-2x' title='Checkout' />
			</Link>
		</header>
	);
};

export default Header;
