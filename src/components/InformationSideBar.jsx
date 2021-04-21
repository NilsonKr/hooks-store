import React from 'react';

const InformationSideBar = ({ items, cart }) => {
	return (
		<div className='Information-sidebar'>
			{items.length > 0 && <h3>Order Summary:</h3>}
			{items.map(item => (
				<div className='Information-item' key={cart[item].id}>
					<div className='Information-element'>
						<h4>{cart[item].title}</h4>
						<span>
							{cart[item].quantity} X ${cart[item].totalPrice}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default InformationSideBar;
