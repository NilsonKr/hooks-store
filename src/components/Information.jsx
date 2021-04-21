import React from 'react';
import { Link } from 'react-router-dom';

const Information = ({ formRef, submit }) => (
	<div className='Information-content'>
		<div className='Information-head'>
			<h2>Contact Information: </h2>
		</div>
		<div className='Information-form'>
			<form ref={formRef}>
				<input type='text' placeholder='Full Name' name='name' />
				<input type='text' placeholder='E-Mail' name='email' />
				<input type='text' placeholder='Address' name='address' />
				<input type='text' placeholder='APT' name='apto' />
				<input type='text' placeholder='City' name='city' />
				<input type='text' placeholder='Country' name='country' />
				<input type='text' placeholder='State' name='state' />
				<input type='text' placeholder='Postal Code' name='cp' />
				<input type='text' placeholder='Phone Number' name='phone' />
			</form>
		</div>
		<div className='Information-buttons'>
			<Link className='Information-back' to='/checkout'>
				Go Back
			</Link>
			<Link className='Information-next' to='/checkout/payment'>
				<button type='button' onClick={submit}>
					Pay
				</button>
			</Link>
		</div>
	</div>
);

export default Information;
