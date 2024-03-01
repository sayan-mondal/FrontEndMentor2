import { apiRoutes } from './apiRoutes';
import { GET } from './httpMethods';

export const getAdvice = async () => {
	const URL = apiRoutes.advice;

	const slipObj = await GET(URL);

	return slipObj.slip;
};
