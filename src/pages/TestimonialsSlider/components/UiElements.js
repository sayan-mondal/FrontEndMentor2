import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import PatternBg from '../assets/images/pattern-bg.svg';
import PatternCurve from '../assets/images/pattern-curve.svg';
import PatternQuotes from '../assets/images/pattern-quotes.svg';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const theme = {
	pallete: {
		primary: {
			darkBlue: 'hsl(240, 38%, 20%)',
			grayishBlue: 'hsl(240, 18%, 77%)',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
		fontSizes: {
			300: pxToRem(15),
			400: pxToRem(16),
			800: pxToRem(18),
			900: pxToRem(24),
		},
	},
	breakPoints: {
		sm: pxToRem(576),
		lg: pxToRem(992),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root{
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.darkBlue};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary.grayishBlue};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[300]};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[800]};

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		    --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900]};
	    }
    };
    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        display: grid;
        align-items: center;
    };
`;

export const Container = styled.div`
	max-width: 30rem;
	background-image: url(${PatternBg}), url(${PatternCurve}),
		url(${PatternQuotes});
	background-repeat: no-repeat;
	background-position: left 50% top 7%, left bottom, left 50% top 72%;
	background-size: 90%, 100%, 25%;
	box-shadow: 0px 0px 15px hsl(0 0% 0% / 0.2);
	padding: 3.5rem 2rem;
	margin: 0 auto;
	overflow: hidden;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		background-size: 85%, 100%, 25%;
		background-position: left 50% top 5%, left bottom, left 50% top 65%;
		padding: 3.5rem 3rem;
		margin: 3rem auto;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		max-width: 60rem;
		background-position: right 2% top 50%, left bottom, left 15% top 15%;
		background-size: 53%, auto, auto;
		padding: 3.5rem 3.5rem 1.5rem;
	}
`;

export const Content = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'image'
		'testimonial';
	gap: 3rem;
	overflow: hidden;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		gap: 4rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-template-columns: 1.2fr 1fr;
		grid-template-areas: 'testimonial image';
		gap: 0rem;
		padding-bottom: 2rem;
	}
`;

export const TestimonialWrapper = styled.div`
	grid-area: testimonial;
	color: var(--clr-primary-1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		text-align: left;
	}
`;

export const Testimonial = styled(motion.p)`
	--m-q: 0.3ch;

	font-size: var(--fs-900);
	font-weight: 300;

	&::before {
		content: open-quote;
		margin-right: var(--m-q);
	}

	&::after {
		content: close-quote;
		margin-left: var(--m-q);
	}
`;

export const UserWrapper = styled(motion.p)`
	margin-top: 1rem;
`;

export const Name = styled.span`
	font-weight: 700;
`;

export const Info = styled.span`
	display: block;
	color: var(--clr-primary-2);
	margin-left: 0rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		display: inline;
		margin-left: 0.5rem;
	}
`;

export const ImageWrapper = styled.div`
	grid-area: image;
	width: 100%;
	position: relative;
	padding: 0 2rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		padding: 0rem;
	}
`;

export const Image = styled(motion.img)`
	width: 100%;
	object-fit: cover;
	border-radius: 0.25rem;
	box-shadow: 0px 0px 15px hsl(0 0% 0% / 0.1);
	pointer-events: none;
`;

export const ButtonsWrapper = styled(motion.div)`
	display: inline-block;
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 3rem;
	box-shadow: 0px 0px 15px hsl(0 0% 0% / 0.2);
	overflow: hidden;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		left: 0;
	}
`;

export const Button = styled.button`
	--p-x: 1.25rem;

	background-color: white;
	padding: 1rem;

	&:nth-of-type(1) {
		padding-right: var(--p-x);
	}

	&:nth-of-type(2) {
		padding-left: var(--p-x);
	}
`;

export const Icon = styled.img`
	object-fit: cover;
`;
