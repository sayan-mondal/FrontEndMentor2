import { useReducer } from 'react';

const initState = {
	billAmount: '',
	selectedTip: { id: 0, value: '' },
	noOfPeople: '',
	tipAmount: '0.00',
	total: '0.00',
};

const stringConverter = (value) => {
	return value.length === 0 ? 0 : value * 1;
};

const compute = (state) => {
	const { billAmount, selectedTip, noOfPeople } = state;

	if (
		billAmount.length === 0 ||
		selectedTip.id === 0 ||
		noOfPeople.length === 0
	)
		return state;

	if (stringConverter(noOfPeople) === 0)
		return {
			...state,
			tipAmount: '0.00',
			total: '0.00',
		};

	const computedTotal =
		stringConverter(billAmount) / stringConverter(noOfPeople);
	const computedTipAmount =
		(stringConverter(selectedTip.value) / 100) * stringConverter(computedTotal);

	return {
		...state,
		tipAmount: computedTipAmount.toFixed(2).toString(),
		total: computedTotal.toFixed(2).toString(),
	};
};

const computeReducer = (state, action) => {
	if (action.type === 'UPDATEBILLAMOUNT') {
		const updatedState = {
			...state,
			billAmount: action.value,
		};

		const computedState = compute(updatedState);

		return { ...computedState };
	}

	if (action.type === 'UPDATETIPPERCENT') {
		const updatedState = {
			...state,
			selectedTip: action.value,
		};

		const computedState = compute(updatedState);

		return { ...computedState };
	}

	if (action.type === 'UPDATENOOFPEOPLE') {
		const updatedState = {
			...state,
			noOfPeople: action.value,
		};

		const computedState = compute(updatedState);

		return { ...computedState };
	}

	if (action.type === 'RESET') {
		return initState;
	}
};

export const useCompute = () => {
	const [states, dispatch] = useReducer(computeReducer, initState);

	const setBillAmount = (value) => {
		dispatch({ type: 'UPDATEBILLAMOUNT', value });
	};

	const setSelectedTip = (value) => {
		dispatch({ type: 'UPDATETIPPERCENT', value });
	};

	const setNoOfPeople = (value) => {
		dispatch({ type: 'UPDATENOOFPEOPLE', value });
	};

	const isInitState = () => {
		const { billAmount, selectedTip, noOfPeople } = states;

		return (
			billAmount.length === 0 && selectedTip.id === 0 && noOfPeople.length === 0
		);
	};

	const reset = () => {
		dispatch({ type: 'RESET' });
	};

	return {
		setBillAmount,
		setSelectedTip,
		setNoOfPeople,
		isInitState,
		reset,
		...states,
	};
};
