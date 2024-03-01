import { css } from 'styled-components';
import BREAKPOINTS from '../Elements/breakpoints';
import PALLETE from '../Elements/pallete';
import SHAPES from '../Elements/shapes';
import TYPOGRAPHY from '../Elements/typography';

export const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const objectValueModifier = (updateFn, obj) => {
	const updatedObj = {};

	Object.keys(obj).forEach((key) => {
		updatedObj[key] = updateFn(obj[key]);
	});

	return updatedObj;
};

export const themeGenerator = (isMobile) => {
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
		isMobile,
	};
};

export const flowContent = (value = '1rem', direction = 'v') => {
	return css`
		> * ~ * {
			${direction === 'v' ? `margin-top: ${value};` : `margin-left: ${value};`}
		}
	`;
};
