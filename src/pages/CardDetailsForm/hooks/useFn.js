import { useReducer } from 'react';

const defaultDetails = {
	name: 'Jane Appleseed',
	cardNumber: '0000 0000 0000 0000',
	expDate: { mm: '00', yy: '00' },
	cvc: '000',
};

const errorMessages = {
	1: "Can't be blank",
	2: 'Card number must be 16 digits',
	3: 'Invalid Expiry date',
	4: 'Invalid CVC',
};

const dispatchTypes = {
	1: 'UPDATENAME',
	2: 'UPDATECARDNUMBER',
	3: 'UPDATEEXPDATEMM',
	4: 'UPDATEEXPDATEYY',
	5: 'UPDATECVC',
	6: 'UPDATESHOWERRORS',
	7: 'UPDATEISFORMSUBMITTED',
	8: 'RESET',
};

const keys = {
	1: 'Backspace',
	2: 'Delete',
};

const initState = {
	name: { value: '', error: 1 },
	cardNumber: { value: '', error: 1 },
	expDate: {
		mm: { value: '', error: 1 },
		yy: { value: '', error: 1 },
		error: 1,
	},
	cvc: { value: '', error: 1 },
	showErrors: false,
	isFormValid: false,
	isFormSubmitted: false,
};

const isStringEmpty = (string) => {
	return string.length === 0;
};

const isCustomNumber = (value) => {
	const regex = /^[\d]*$/;

	return regex.test(value);
};

const toCardNumber = (cardNumber) => {
	return cardNumber.split(' ').join('');
};

const cardNumberSpacer = (cardNumber) => {
	return cardNumber
		.split('')
		.map((digit, index) =>
			(index + 1) % 4 === 0 && index < 12 ? digit + ' ' : digit
		)
		.join('');
};

const hasDigitCountIncreased = (enteredValue, prevValue) => {
	return enteredValue.length > prevValue.length;
};

const hasRequiredLength = (string, requiredLength) => {
	return string.length === requiredLength;
};

const isValidMonth = (mm) => {
	return +mm <= 12;
};

const validateName = (enteredValue) => {
	if (isStringEmpty(enteredValue)) return 1;

	return null;
};

const validateCardNumber = (enteredValue) => {
	if (isStringEmpty(enteredValue)) return 1;

	if (!hasRequiredLength(enteredValue, 19)) return 2;

	return null;
};

const validateExpDate = (enteredMM, enteredYY) => {
	let error = {
		mm: null,
		yy: null,
		mmyy: null,
	};
	let today = new Date();
	let mm = today.getMonth() + 1;
	let yy = +String(today.getFullYear()).slice(2);

	if (isStringEmpty(enteredMM) || isStringEmpty(enteredYY)) {
		error.mm = isStringEmpty(enteredMM) ? 1 : null;
		error.yy = isStringEmpty(enteredYY) ? 1 : null;
		error.mmyy = 1;

		return error;
	}

	if (+enteredYY < yy || (+enteredYY === yy && +enteredMM <= mm)) {
		error.mm = error.yy = error.mmyy = 3;
		return error;
	}

	return error;
};

const validateCvc = (enteredValue) => {
	if (isStringEmpty(enteredValue)) return 1;

	if (!hasRequiredLength(enteredValue, 3)) return 4;

	return null;
};

const validateForm = (state) => {
	return (
		state.name.error === null &&
		state.cardNumber.error === null &&
		state.expDate.error === null &&
		state.cvc.error === null
	);
};

const getSpacesIndexes = (string) => {
	const spacesArr = string.match(/\s/g);

	let pos = 0;
	const spacesIndexes = spacesArr.map((arrEl) => {
		const spaceIndex = string.indexOf(' ', pos);
		pos = spaceIndex + 1;
		return spaceIndex;
	});

	return spacesIndexes;
};

const getUpdatedCardNumber = (currCardNumber, prevCardNumber, direction) => {
	const spacesIndexesOfPrev = getSpacesIndexes(prevCardNumber);
	const spacesIndexesOfCurr = getSpacesIndexes(currCardNumber);

	let requiredIndex = null;

	spacesIndexesOfCurr.map((currEl, index) => {
		const currElOfPrev = spacesIndexesOfPrev[index];
		if (!(currEl === currElOfPrev || currEl - 1 === currElOfPrev))
			requiredIndex = requiredIndex === null ? index : requiredIndex;
		return currEl;
	});

	requiredIndex =
		requiredIndex === null ? spacesIndexesOfPrev.length - 1 : requiredIndex;

	const removedSpaceIndex = spacesIndexesOfPrev[requiredIndex];

	const sliceIndex = direction < 0 ? removedSpaceIndex - 1 : removedSpaceIndex;

	const updatedCardNumber =
		currCardNumber.slice(0, sliceIndex) + currCardNumber.slice(sliceIndex + 1);

	return updatedCardNumber;
};

const getValidatedState = (enteredValue, state, field, validateFn) => {
	if (field === 'mm' || field === 'yy') {
		let error = validateExpDate(enteredValue, state.expDate.yy.value);

		if (field === 'yy') {
			error = validateExpDate(state.expDate.mm.value, enteredValue);
		}

		let updatedExpDate = {
			...state.expDate,
			[field]: { ...state.expDate[field], value: enteredValue },
		};
		updatedExpDate.mm.error = error.mm;
		updatedExpDate.yy.error = error.yy;
		updatedExpDate.error = error.mmyy;

		let updatedState = { ...state, expDate: updatedExpDate };
		updatedState.isFormValid = validateForm(updatedState);

		return updatedState;
	}

	const error = validateFn(enteredValue);

	const updatedField = { ...state[field], value: enteredValue, error };
	let updatedState = { ...state, [field]: updatedField };

	updatedState.isFormValid = validateForm(updatedState);
	return updatedState;
};

var prevCardNumber = '';

const reducerFn = (state, action) => {
	if (action.type === dispatchTypes[1]) {
		if (action.data.updateType === 'VALUE') {
			const enteredValue = action.data.value;

			const updatedState = getValidatedState(
				enteredValue,
				state,
				'name',
				validateName
			);

			return updatedState;
		}
	}

	if (action.type === dispatchTypes[2]) {
		if (action.data.updateType === 'VALUE') {
			let enteredValue = action.data.value;
			prevCardNumber = state.cardNumber.value;

			if (!isCustomNumber(toCardNumber(enteredValue))) return state;

			if (hasDigitCountIncreased(enteredValue, state.cardNumber.value)) {
				enteredValue = cardNumberSpacer(toCardNumber(enteredValue));
			}

			const updatedState = getValidatedState(
				enteredValue,
				state,
				'cardNumber',
				validateCardNumber
			);

			return updatedState;
		}

		if (action.data.updateType === 'DECREMENT') {
			const enteredValue = action.data.value;
			let keyPressed = action.data.keyPressed;

			if (toCardNumber(enteredValue) !== toCardNumber(prevCardNumber))
				return state;

			let updatedValue = getUpdatedCardNumber(
				enteredValue,
				prevCardNumber,
				keyPressed === keys[1] ? -1 : 1
			);

			updatedValue = cardNumberSpacer(toCardNumber(updatedValue));

			const updatedState = getValidatedState(
				updatedValue,
				state,
				'cardNumber',
				validateCardNumber
			);

			return updatedState;
		}
	}

	if (action.type === dispatchTypes[3]) {
		if (action.data.updateType === 'VALUE') {
			const enteredValue = action.data.value;

			if (!isCustomNumber(enteredValue) || !isValidMonth(enteredValue))
				return state;

			const updatedState = getValidatedState(
				enteredValue,
				state,
				'mm',
				validateExpDate
			);

			return updatedState;
		}
	}

	if (action.type === dispatchTypes[4]) {
		if (action.data.updateType === 'VALUE') {
			const enteredValue = action.data.value;

			if (!isCustomNumber(enteredValue)) return state;

			const updatedState = getValidatedState(
				enteredValue,
				state,
				'yy',
				validateExpDate
			);

			return updatedState;
		}
	}

	if (action.type === dispatchTypes[5]) {
		if (action.data.updateType === 'VALUE') {
			const enteredValue = action.data.value;

			if (!isCustomNumber(enteredValue)) return state;

			const updatedState = getValidatedState(
				enteredValue,
				state,
				'cvc',
				validateCvc
			);

			return updatedState;
		}
	}

	if (action.type === dispatchTypes[6]) {
		return { ...state, showErrors: action.data };
	}

	if (action.type === dispatchTypes[7]) {
		return { ...state, isFormSubmitted: action.data };
	}

	if (action.type === dispatchTypes[8]) {
		return initState;
	}

	return state;
};

const useFn = () => {
	const [states, dispatch] = useReducer(reducerFn, initState);

	const handleInputChange = (e, type) => {
		const enteredValue = e.target.value;
		dispatch({
			type: dispatchTypes[type],
			data: { updateType: 'VALUE', value: enteredValue },
		});
	};

	const handleInputKeyUp = (e) => {
		const enteredValue = e.target.value;
		const keyPressed = e.key;

		if (keyPressed === keys[1] || keyPressed === keys[2]) {
			dispatch({
				type: dispatchTypes[2],
				data: { updateType: 'DECREMENT', value: enteredValue, keyPressed },
			});
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!states.isFormValid) {
			dispatch({ type: dispatchTypes[6], data: true });
			return;
		}

		const cardDetails = {
			name: states.name.value,
			cardNumber: states.cardNumber.value,
			expDate: {
				mm: states.expDate.mm.value,
				yy: states.expDate.yy.value,
			},
			cvc: states.cvc.value,
		};

		console.log(cardDetails);

		dispatch({ type: dispatchTypes[7], data: true });
	};

	const handleButtonClick = (e) => {
		dispatch({ type: dispatchTypes[8] });
	};

	return {
		...states,
		errorMessages,
		defaultDetails,
		isStringEmpty,
		handleInputChange,
		handleInputKeyUp,
		handleFormSubmit,
		handleButtonClick,
	};
};

export default useFn;
