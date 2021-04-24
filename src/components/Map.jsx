import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Map = ({ cordinates }) => {
	const mapStyles = {
		width: '100%',
		height: '50vh',
	};

	const location = {
		lat: cordinates.lat,
		lng: cordinates.lng,
	};

	return (
		<LoadScript googleMapsApiKey={process.env.MAPSKEY}>
			<GoogleMap mapContainerStyle={mapStyles} center={location} zoom={17}>
				<Marker position={location} />
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
