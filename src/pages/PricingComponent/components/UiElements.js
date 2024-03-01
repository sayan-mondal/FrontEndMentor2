import styled, { createGlobalStyle, css } from 'styled-components';
import BgTop from '../assets/images/bg-top.svg';
import BgBottom from '../assets/images/bg-bottom.svg';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const theme = {
	pallete: {
		primary: {
			primary1: 'hsl(236, 72%, 79%)',
			primary2: 'hsl(237, 63%, 64%)',
		},

		neutral: {
			veryLightGrayishBlue: 'hsl(240, 78%, 98%)',
			lightGrayishBlue: 'hsl(234, 14%, 74%)',
			grayishBlue: 'hsl(233, 13%, 49%)',
			darkGrayishBlue: 'hsl(232, 13%, 33%)',
		},
	},
	typography: {
		fontFamily: 'Montserrat, sans-serif',
		fontSizes: {
			400: pxToRem(16),
			900: pxToRem(32),
		},
	},
	breakPoints: {
		lg: pxToRem(992),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root{
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.primary1};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary.primary2};
        --clr-gradient: linear-gradient(var(--clr-primary-1), var(--clr-primary-2));
        --clr-neutral-1: ${({ theme }) =>
					theme.pallete.neutral.veryLightGrayishBlue};
        --clr-neutral-2: ${({ theme }) =>
					theme.pallete.neutral.lightGrayishBlue};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral.grayishBlue};
        --clr-neutral-4: ${({ theme }) =>
					theme.pallete.neutral.darkGrayishBlue};
                    
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900]};
    }
    body{
	    background-color: var(--clr-neutral-1);
        background-image: url(${BgTop}),url(${BgBottom});
        background-repeat: no-repeat;
        background-position: top right, bottom left;
        color: var(--clr-neutral-4);
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        font-weight: 700;
        display: grid;
        align-items: center;
    }
`;

export const Container = styled.div`
	max-width: 24rem;
	padding: 3rem 2rem;
	margin: auto;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		max-width: 66rem;
		padding: 3rem;
	}
`;

export const Title = styled.h2`
	text-align: center;
`;

export const PriceToggle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-top: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		margin-top: 2rem;
	}
`;

export const ToggleOption = styled.p`
	color: var(--clr-neutral-2);
`;

export const Toggle = styled.div`
	--translate-x: 1.5rem;

	width: 3.5rem;
	height: 2rem;
	background: var(--clr-gradient);
	border-radius: 2rem;
	position: relative;
	padding: 0.25rem;
	cursor: pointer;

	&::after {
		width: 1.5rem;
		height: 1.5rem;
		content: '';
		background-color: white;
		position: absolute;
		border-radius: 50%;
		transition: transform 100ms ease-in-out;
		transform: ${({ toggleOption }) =>
			toggleOption ? 'translateX(0)' : 'translateX(var(--translate-x))'};
	}
`;

export const PriceList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	margin-top: 3rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
	}
`;

export const PriceListItem = styled.li`
	--border-radius-value: 0.5rem;
	${({ featured }) =>
		featured
			? css`
					--clr-1: var(--clr-gradient);
					--clr-2: white;
					--clr-3: white;
					--clr-4: white;
					--clr-5: var(--clr-primary-2);
					--clr-6: white;
					--clr-7: white;
					--border-radius: var(--border-radius-value);
					--padding: 3rem 2rem;
					--margin: 0;
			  `
			: css`
					--clr-1: white;
					--clr-2: var(--clr-gradient);
					--clr-3: inherit;
					--clr-4: var(--clr-neutral-3);
					--clr-5: white;
					--clr-6: var(--clr-neutral-2);
					--clr-7: var(--clr-primary-2);
					--border-radius: 0;
					--padding: 2rem;
					--margin: 1rem 0;
			  `};
	background: var(--clr-1);
	color: var(--clr-3);
	text-align: center;
	border-radius: var(--border-radius-value);
	box-shadow: 0px 0px 5px var(--clr-neutral-2);
	padding: 2rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		border-radius: var(--border-radius);
		padding: var(--padding);
		margin: var(--margin);

		&:first-of-type {
			border-top-left-radius: var(--border-radius-value);
			border-bottom-left-radius: var(--border-radius-value);
		}

		&:last-of-type {
			border-top-right-radius: var(--border-radius-value);
			border-bottom-right-radius: var(--border-radius-value);
		}
	}
`;

export const Name = styled.h3``;

const Divider = css`
	&::after {
		width: 100%;
		height: 1px;
		content: '';
		background-color: var(--clr-6);
		position: absolute;
		bottom: 0;
		left: 0;
		opacity: 0.5;
	}
`;

export const Price = styled.p`
	font-size: var(--fs-900);
	position: relative;
	padding: 1rem 0;

	${Divider};
`;

export const Feature = styled.p`
	color: var(--clr-4);
	position: relative;
	padding: 1rem;

	${Divider};
`;

export const Button = styled.a`
	display: block;
	background: var(--clr-2);
	color: var(--clr-5);
	border-radius: 0.35rem;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	border: 1px solid;
	padding: 0.75rem 2rem;
	margin-top: 2rem;

	&:hover {
		background: transparent;
		color: var(--clr-7);
		border: 1px solid var(--clr-7);
	}
`;
