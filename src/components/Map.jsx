import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
	const mapStyles = {
		width: '100%',
		height: '50vh',
	};

	const location = {
		lat: 4.60971,
		lng: -74.08175,
	};

	return (
		<LoadScript googleMapsApiKey={process.env.MAPSKEY}>
			<GoogleMap mapContainerStyle={mapStyles} center={location} zoom={9}>
				<Marker position={location} />
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
