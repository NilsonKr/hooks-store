import React, { useEffect, useState } from 'react';
import geoApi from '../utils/geoApi';

const useAddress = address => {
	const [location, setLocation] = useState({});

	useEffect(async () => {
		const results = await geoApi(address || '85-1 Chebu-dong');

		setLocation({
			lat: results[0].geometry.location.lat,
			lng: results[0].geometry.location.lng,
		});
	}, []);

	return location;
};

export default useAddress;
