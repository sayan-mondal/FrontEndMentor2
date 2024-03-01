import PALLETE from '../elements/pallete';
import TYPOGRAPHY from '../elements/typography';
import SHAPES from '../elements/shapes';
import BREAKPOINTS from '../elements/breakpoints';

export const pxToRem = (value = '1rem') => {
	return `${value / 16}rem`;
};

const objectValueModifier = (updateFn, obj) => {
	const updatedObj = {};

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
			TYPOGRAPHY.fonstSizes
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
