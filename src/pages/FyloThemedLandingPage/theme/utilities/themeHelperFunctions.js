import { css } from 'styled-components';
import BREAKPOINTS from '../elements/breakpoints';
import PALLETE from '../elements/pallete';
import SHAPES from '../elements/shapes';
import TYPOGRAPHY from '../elements/typography';

export const pxToRem = (value = '1rem') => {
	return `${value / 16}rem`;
};

const objectValueModifier = (updateFn, obj) => {
	let updatedObj = {};

	Object.keys(obj).forEach((key) => {
		updatedObj[key] = updateFn(obj[key]);
	});

	return updatedObj;
};

export const themeGenerator = () => {
	const typography = {
		...TYPOGRAPHY,
		fontSizes: objectValueModifier(
			objectValueModifier.bind(this, pxToRem),
			TYPOGRAPHY.fontSizes
		),
	};

	const shapes = {
		...SHAPES,
		borderRadius: objectValueModifier(pxToRem, SHAPES.borderRadius),
	};

	const breakpoints = objectValueModifier(pxToRem, BREAKPOINTS);

	return {
		pallete: PALLETE,
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
