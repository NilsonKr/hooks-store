const geoApiRequest = async address => {
	try {
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.MAPSKEY}`
		);
		const { results } = await response.json();

		return results;
	} catch (error) {
		return { error: error.message };
	}
};

export default geoApiRequest;
