import pallete from '../Elements/pallete';
import TYPOGRAPHY from '../Elements/typography';
import SHAPES from '../Elements/shapes';
import BREAKPOINTS from '../Elements/breakpoints';

export const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const objectValueModifier = (updatefn, obj) => {
	let updatedObj = {};

	Object.keys(obj).forEach((objKey) => {
		updatedObj[objKey] = updatefn(obj[objKey]);
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
		circleDiameters: objectValueModifier(pxToRem, SHAPES.circleDiameters),
	};

	const breakpoints = objectValueModifier(pxToRem, BREAKPOINTS);

	return {
		pallete,
		typography,
		shapes,
		breakpoints,
	};
};
