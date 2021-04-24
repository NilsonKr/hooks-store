const geoApiRequest = async address => {
	const normalizeAddress = address.replace('#', '');

	try {
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${normalizeAddress}&key=${process.env.MAPSKEY}`
		);
		const { results } = await response.json();

		return results;
	} catch (error) {
		console.log(error);
		return { error: error.message };
	}
};

export default geoApiRequest;
