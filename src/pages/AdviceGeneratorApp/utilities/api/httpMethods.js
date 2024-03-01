import axios from 'axios';

export const GET = async (URL, requestData) => {
	const response = await axios
		.get(URL, {
			headers: {
				Accept: 'application/json',
			},
			...requestData,
		})
		.catch((error) => {
			throw new Error(error);
		});

	const responseData = response.data;

	return responseData;
};
