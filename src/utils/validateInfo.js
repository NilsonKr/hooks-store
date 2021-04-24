import geoApi from './geoApi';

const validateInfo = async info => {
	for (const property in info) {
		if (info[property] === '') {
			return { error: `${property} Is Empty!`, approve: false };
		}
	}

	const location = await geoApi(info.address);

	if (!location.length) {
		return { error: `Please enter a valid Address`, approve: false };
	}

	return { error: null, approve: true };
};

export default validateInfo;
