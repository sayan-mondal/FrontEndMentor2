import { useCallback, useReducer } from 'react';

const httpReducer = (state, action) => {
	if (action.type === 'SEND') {
		return {
			status: 'pending',
			data: null,
			error: null,
		};
	}

	if (action.type === 'SUCCESS') {
		return {
			status: 'completed',
			data: action.responseData,
			error: null,
		};
	}

	if (action.type === 'ERROR') {
		return {
			status: 'completed',
			data: null,
			error: action.errorMessage,
		};
	}

	return state;
};

export const useHttp = (requestFunction, startWithPending = false) => {
	const [httpState, dispatch] = useReducer(httpReducer, {
		status: startWithPending ? 'pending' : null,
		data: null,
		error: null,
	});

	const sendRequest = useCallback(
		async (requestData) => {
			dispatch({ type: 'SEND' });
			try {
				const responseData = await requestFunction(requestData);
				dispatch({ type: 'SUCCESS', responseData });
			} catch (error) {
				dispatch({
					type: 'ERROR',
					errorMessage: error.message || 'Unable to send HTTP request',
				});
			}
		},
		[requestFunction]
	);

	return { sendRequest, ...httpState };
};
