import { useReducer } from 'react';

const computeYearlyPrice = (monthlyPrice, discount) => {
	const yearlyPrice = monthlyPrice * 12;
	return yearlyPrice * (1 - discount / 100);
};

const computePricing = (pricingData) => {
	const pricing = pricingData.monthlyPricing.map((monthlyPricedata) => ({
		pageViewsCount: monthlyPricedata.pageViewsCount,
		monthlyPrice: monthlyPricedata.price,
		yearlyPrice: computeYearlyPrice(
			monthlyPricedata.price,
			pricingData.yearlyDiscountPercent
		),
	}));

	return pricing;
};

const computeSliderProps = (dataArrayLength) => {
	const max = dataArrayLength - 1;

	return {
		min: 0,
		max,
		initValue: Math.ceil(max / 2),
	};
};

const initStateFn = (data, toggleValue = 0) => {
	const sliderProps = computeSliderProps(data.monthlyPricing.length);

	return {
		sliderValue: sliderProps.initValue,
		toggleValue,
		pricingData: computePricing(data),
		sliderProps: { min: sliderProps.min, max: sliderProps.max },
		pageViewsCount: data.monthlyPricing[sliderProps.initValue].pageViewsCount,
		price: data.monthlyPricing[sliderProps.initValue].price
			.toFixed(2)
			.toString(),
	};
};

const statesReducer = (state, action) => {
	if (action.type === 'UPDATESLIDERVALUE') {
		const { pricingData, toggleValue } = state;
		const updatedSliderValue = action.data;
		const updatedpageViewsCount =
			pricingData[updatedSliderValue].pageViewsCount;
		const updatedPrice =
			toggleValue === 0
				? pricingData[updatedSliderValue].monthlyPrice
				: pricingData[updatedSliderValue].yearlyPrice;
		return {
			...state,
			sliderValue: updatedSliderValue,
			pageViewsCount: updatedpageViewsCount,
			price: updatedPrice.toFixed(2).toString(),
		};
	}

	if (action.type === 'UPDATETOGGLEVALUE') {
		const { pricingData, sliderValue } = state;
		const updatedToggleValue = state.toggleValue === 0 ? 1 : 0;
		const updatedPrice =
			updatedToggleValue === 0
				? pricingData[sliderValue].monthlyPrice
				: pricingData[sliderValue].yearlyPrice;
		return {
			...state,
			toggleValue: updatedToggleValue,
			price: updatedPrice.toFixed(2).toString(),
		};
	}

	if (action.type === 'UPDATEPRICINGDATA') {
		return initStateFn(action.data);
	}
};

const useStates = (data) => {
	const [states, dispatch] = useReducer(statesReducer, initStateFn(data));

	const setSliderValue = (value) => {
		dispatch({ type: 'UPDATESLIDERVALUE', data: value });
	};

	const setToggleValue = () => {
		dispatch({ type: 'UPDATETOGGLEVALUE' });
	};

	const updatePricing = (pricingData) => {
		dispatch({ type: 'UPDATETOGGLEVALUE', data: pricingData });
	};

	const handleSliderValueChange = (e) => {
		const selectedSliderValue = e.target.value;
		setSliderValue(selectedSliderValue);
	};

	const handleToggleButtonClick = (e) => {
		setToggleValue();
	};

	return {
		...states,
		updatePricing,
		handleSliderValueChange,
		handleToggleButtonClick,
	};
};

export default useStates;
