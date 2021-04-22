const getTotalPrice = cart => {
	let total = 0;
	for (const product in cart) {
		total += cart[product].totalPrice;
	}

	return total;
};

export default getTotalPrice;
