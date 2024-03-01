import { css } from 'styled-components';
import BREAKPOINTS from '../Elements/breakpoints';
import PALLETE from '../Elements/pallete';
import SHAPES from '../Elements/shapes';
import TYPOGRAPHY from '../Elements/typography';

export const pxToRem = (value) => {
	return `${value / 16}rem`;
};

const objectValueModifier = (updateFn, obj) => {
	const updatedObj = {};

	Object.keys(obj).forEach((key) => {
		updatedObj[key] = updateFn(obj[key]);
	});

	return updatedObj;
};

export const ThemeGenerator = (isNavMenuOpen) => {
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
		isNavMenuOpen,
	};
};

export const flowContent = (value = '1rem', direction = 'y') => {
	return css`
		> * ~ * {
			margin: ${direction === 'x' ? `0 0 0 ${value}` : `${value} 0 0 0`};
		}
	`;
};
