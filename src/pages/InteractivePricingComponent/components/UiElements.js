import styled, { createGlobalStyle, css } from 'styled-components';
import BgPattern from '../assets/images/bg-pattern.svg';
import PatternCircles from '../assets/images/pattern-circles.svg';
import IconSlider from '../assets/images/icon-slider.svg';
import IconCheck from '../assets/images/icon-check.svg';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

const hslColorCustomizer = (color, value) => {
	const colorValues = color.split(' ');

	const lightness = colorValues[2].slice(0, -2);
	const updatedLightness = +lightness + value;

	const updatedColor =
		colorValues[0] +
		' ' +
		colorValues[1] +
		' ' +
		(updatedLightness > 0 ? updatedLightness : 0) +
		'%)';

	return updatedColor;
};

export const theme = {
	pallete: {
		primary: {
			softCyan: 'hsl(174, 77%, 80%)',
			strongCyan: 'hsl(174, 86%, 45%)',
			lightGrayishRed: 'hsl(14, 92%, 95%)',
			lightRed: 'hsl(15, 100%, 70%)',
			paleBlue: 'hsl(226, 100%, 87%)',
		},

		neutral: {
			white: 'hsl(0, 0%, 100%)',
			veryPaleBlue: 'hsl(230, 100%, 99%)',
			lightGrayishBlue1: 'hsl(224, 65%, 95%)',
			lightGrayishBlue2: 'hsl(223, 50%, 87%)',
			grayishBlue: 'hsl(225, 20%, 60%)',
			darkDesaturatedBlue: 'hsl(227, 35%, 25%)',
		},
	},
	typography: {
		fontFamily: 'Manrope, sans-serif',
		fontSizes: {
			200: pxToRem(11),
			300: pxToRem(15),
			400: pxToRem(16),
			800: pxToRem(24),
			900: pxToRem(32),
		},
	},
	breakPoints: {
		sm: pxToRem(576),
		md: pxToRem(768),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.softCyan};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary.strongCyan};
        --clr-primary-2-light: ${({ theme }) =>
					hslColorCustomizer(theme.pallete.primary.strongCyan, 5)};
        --clr-primary-2-dark:${({ theme }) =>
					hslColorCustomizer(theme.pallete.primary.strongCyan, -5)};
        --clr-primary-3: ${({ theme }) =>
					theme.pallete.primary.lightGrayishRed};
        --clr-primary-4: ${({ theme }) => theme.pallete.primary.lightRed};
        --clr-primary-5: ${({ theme }) => theme.pallete.primary.paleBlue};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral.white};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral.veryPaleBlue};
        --clr-neutral-3: ${({ theme }) =>
					theme.pallete.neutral.lightGrayishBlue1};
        --clr-neutral-4: ${({ theme }) =>
					theme.pallete.neutral.lightGrayishBlue2};
        --clr-neutral-5: ${({ theme }) => theme.pallete.neutral.grayishBlue};
        --clr-neutral-6: ${({ theme }) =>
					theme.pallete.neutral.darkDesaturatedBlue};
        --fs-200: ${({ theme }) => theme.typography.fontSizes[200]};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300]};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800]};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900]};
    };
    body {
        background-color: var(--clr-neutral-2);
        background-image: url(${BgPattern});
        background-repeat: no-repeat;
        background-size: 100% 50%;
        background-position: top left;
        color: var(--clr-neutral-5);
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        font-weight: 600;
        display: grid;
        align-items: center;
    };
`;

const flowContent = (value = '1rem') => {
	return css`
		> * ~ * {
			margin-top: ${value};
		}
	`;
};

export const Container = styled.div`
	max-width: 33rem;
	background-image: url(${PatternCircles});
	background-repeat: no-repeat;
	background-position: center top;
	padding: 2.5rem 0 0;
	margin: 2.5rem 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin: 2.5rem auto;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		max-width: 35rem;
	}
`;

export const TitleWrapper = styled.div`
	text-align: center;
`;

export const Title = styled.h1`
	color: var(--clr-neutral-6);
	font-size: var(--fs-800);

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		font-size: var(--fs-900);
	}
`;

export const Subtitle = styled.p`
	margin-top: 0.5rem;

	span {
		display: block;
		line-height: 2;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin-top: 0.75rem;

		span {
			display: inline;
			line-height: 1.5;
		}
	}
`;

export const Content = styled.div`
	background-color: var(--clr-neutral-1);
	border-radius: 0.5rem;
	box-shadow: 0 0 50px hsl(0 0% 0% / 0.2);
	margin-top: 3.5rem;
`;

const SectionStyles = css`
	padding: 2rem 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		padding: 2.5rem;
	}
`;

export const TopSection = styled.div`
	${SectionStyles};

	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'pageviewscount'
		'custominput'
		'price'
		'billingoptions';
	gap: 1.5rem;
	align-items: center;
	position: relative;

	&::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: var(--clr-neutral-3);
		position: absolute;
		left: 0;
		bottom: 0;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		grid-template-columns: max-content 1fr max-content;
		grid-template-areas:
			'pageviewscount . price'
			'custominput custominput custominput'
			'billingoptions billingoptions billingoptions';
	}
`;

export const PageViewsCount = styled.p`
	grid-area: pageviewscount;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-align: center;
`;

export const Price = styled.p`
	grid-area: price;
	color: var(--clr-neutral-6);
	font-size: var(--fs-900);
	font-weight: 800;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: '$';
	}

	&::after {
		${({ toggleValue }) =>
			toggleValue === 0 ? "content: '/month'" : "content: '/year'"};
		color: var(--clr-neutral-5);
		font-size: var(--fs-400);
		font-weight: 600;
		margin-left: 1ch;
	}
`;

export const CustomSliderWrapper = styled.div`
	grid-area: custominput;
	width: 100%;
`;

const SliderTrack = css`
	width: 100%;
	height: var(--h-track);
	background: linear-gradient(
		90deg,
		var(--clr-primary-1) var(--value-percent),
		var(--clr-neutral-3) var(--value-percent)
	);
	color: transparent;
	border-radius: 1rem;
	cursor: pointer;
`;

const SliderThumb = css`
	width: var(--h);
	height: var(--h);
	background-image: url(${IconSlider});
	background-repeat: no-repeat;
	background-position: center center;
	background-color: var(--clr-primary-2);
	border-radius: 50%;
	box-shadow: 0px 0px 30px var(--clr-primary-2);
	-webkit-appearance: none;
	appearance: none;
	border: 0;
	cursor: pointer;
	margin-top: calc((var(--h) - var(--h-track)) / -2);

	&:hover {
		background-color: var(--clr-primary-2-light);
	}
`;

export const CustomSlider = styled.input`
	--h: 2.5rem;
	--h-track: 10px;
	--value-percent: ${({ value, min, max }) =>
		`${(value / (max - min)) * 100}%`};

	width: 100%;
	height: 2.5rem;
	-webkit-appearance: none;
	appearance: none;
	outline: none;

	&::-webkit-slider-runnable-track {
		${SliderTrack};
	}

	&::-moz-range-track {
		${SliderTrack};
	}

	&::-webkit-slider-thumb {
		${SliderThumb};
	}

	&::-moz-range-thumb {
		${SliderThumb};
	}

	&:focus {
		&::-webkit-slider-thumb {
			background-color: var(--clr-primary-2-dark);
		}

		&::-moz-range-thumb {
			background-color: var(--clr-primary-2-dark);
		}
	}
`;

export const BillingOptionsWrapper = styled.div`
	grid-area: billingoptions;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-left: 2.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		gap: 0.75rem;
		margin-left: 4.5rem;
	}
`;

export const BillingOptionWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const BillingOption = styled.p`
	font-size: var(--fs-300);

	span {
		display: block;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		span {
			display: inline;
		}
	}
`;

export const Toggle = styled.div`
	--w-button: 1rem;
	--p: 0.25rem;
	--t-x: ${({ toggleValue }) =>
		toggleValue === 0 ? '0rem' : 'var(--w-button)'};

	width: calc(2 * (var(--w-button) + var(--p)));
	height: calc(var(--w-button) + 2 * var(--p));
	background-color: var(--clr-neutral-4);
	border-radius: 3rem;
	position: relative;
	cursor: pointer;
	padding: var(--p);

	&::after {
		content: '';
		width: var(--w-button);
		height: var(--w-button);
		background-color: var(--clr-neutral-1);
		position: absolute;
		border-radius: 50%;
		transition: transform 0.2s ease-in-out;
		transform: translateX(var(--t-x));
	}

	&:hover {
		background-color: var(--clr-primary-2-light);
	}
`;

export const Discount = styled.span`
	--p-x: calc((var(--fs-300) - var(--fs-200)) / 2);
	--p-y: calc(3 * var(--p-x));

	height: max-content;
	background-color: var(--clr-primary-3);
	color: var(--clr-primary-4);
	font-size: var(--fs-200);
	border-radius: 0.2rem;
	padding: var(--p-x) var(--p-y);
	margin-left: 2ch;

	&::before {
		content: '-';
	}

	&::after {
		content: '';
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin-left: 1ch;

		&::before {
			content: '';
		}

		&::after {
			content: ' discount';
		}
	}
`;

export const BottomSection = styled.div`
	${SectionStyles};

	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const FeaturesList = styled.ul`
	--gap: 0.3rem;

	${flowContent('var(--gap)')};

	list-style: inside url(${IconCheck});
`;

export const FeatureListItem = styled.li``;

export const Feature = styled.span`
	font-size: var(--fs-300);
	margin-left: 0.5ch;
`;

export const Button = styled.a`
	background-color: var(--clr-neutral-6);
	color: var(--clr-neutral-1);
	border-radius: 3rem;
	padding: 0.5rem 2rem;

	&:hover {
		color: var(--clr-neutral-1);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		color: var(--clr-neutral-4);
	}
`;
