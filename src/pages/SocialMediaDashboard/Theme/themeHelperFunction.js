import { css } from 'styled-components';

export const pxToRem = (value) => {
	return `${value / 16}rem`;
};

const palleteGenerator = (themeName, pallete) => {
	const primary = {
		...pallete.primary.common,
		...pallete.primary[themeName],
	};
	const neutral = {
		...pallete.neutral.common,
		...pallete.neutral[themeName],
	};
	const gradients = {
		...pallete.gradients.common,
		...pallete.gradients[themeName],
	};

	return {
		primary,
		neutral,
		gradients,
	};
};

const objectValuesModifier = (modifierFn, obj) => {
	let updatedObj = {};

	Object.keys(obj).forEach((key) => {
		updatedObj[key] = modifierFn(obj[key]);
	});

	return updatedObj;
};

export const ThemeConfigGenerator = (themeId, themeElements) => {
	const themeName = themeId ? 'light' : 'dark';

	const pallete = palleteGenerator(themeName, themeElements.pallete);

	const typography = {
		...themeElements.typography,
		fontSizes: objectValuesModifier(
			objectValuesModifier.bind(this, pxToRem),
			themeElements.typography.fontSizes
		),
	};

	const shapes = objectValuesModifier(
		objectValuesModifier.bind(this, pxToRem),
		themeElements.shapes
	);

	const breakpoints = objectValuesModifier(pxToRem, themeElements.breakpoints);

	return {
		pallete,
		typography,
		shapes,
		breakpoints,
	};
};

export const flowContent = (value = '1rem') => {
	return css`
		> * ~ * {
			margin-top: ${value};
		}
	`;
};
