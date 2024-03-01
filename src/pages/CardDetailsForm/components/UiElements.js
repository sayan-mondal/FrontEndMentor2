import styled, { createGlobalStyle, css } from 'styled-components';
import BgMainDesktop from '../assets/images/bg-main-desktop.png';
import BgMainMobile from '../assets/images/bg-main-mobile.png';
import BgCardFront from '../assets/images/bg-card-front.png';
import BgCardBack from '../assets/images/bg-card-back.png';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const theme = {
	pallete: {
		primary: {
			primary1: 'hsl(249, 99%, 64%)',
			primary2: 'hsl(278, 94%, 30%)',
			red: 'hsl(0, 100%, 66%)',
		},
		neutral: {
			white: 'hsl(0, 0%, 100%)',
			lightGrayishViolet: 'hsl(270, 3%, 87%)',
			darkGrayishViolet: 'hsl(279, 6%, 55%)',
			veryDarkViolet: 'hsl(278, 68%, 11%)',
		},
	},
	typography: {
		fontFamily: 'Space Grotesk, sans-serif',
		fontSizes: {
			100: pxToRem(12),
			200: pxToRem(13),
			300: pxToRem(15),
			400: pxToRem(16),
			700: pxToRem(18),
			800: pxToRem(19.5),
			900: pxToRem(23.5),
		},
	},
	styles: {
		borderRadius: pxToRem(8),
	},
	breakPoints: {
		sm: pxToRem(576),
		lg: pxToRem(992),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.primary1};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary.primary2};
        --clr-primary-3: ${({ theme }) => theme.pallete.primary.red};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral.white};
        --clr-neutral-2: ${({ theme }) =>
					theme.pallete.neutral.lightGrayishViolet};
        --clr-neutral-3: ${({ theme }) =>
					theme.pallete.neutral.darkGrayishViolet};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral.veryDarkViolet};
        --clr-gradient-1: linear-gradient(90deg, var(--clr-primary-1), var(--clr-primary-2));
        --fs-100: ${({ theme }) => theme.typography.fontSizes[100]};
        --fs-200: ${({ theme }) => theme.typography.fontSizes[200]};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300]};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        --fs-700: ${({ theme }) => theme.typography.fontSizes[700]};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800]};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900]};
        --br:  ${({ theme }) => theme.styles.borderRadius};
    };
    body{
        background-image: url(${BgMainMobile});
        background-repeat: no-repeat;
        background-size: 100% 30%;
        background-color: var(--clr-neutral-1);
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        display: grid;
        align-items: center;

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		    background-image: url(${BgMainDesktop});
            background-size: 40% 100%;
	    }
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
	max-width: 30rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;
	padding: 3rem 2rem;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		padding: 3rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		max-width: 60rem;
		grid-template-columns: 1.3fr 1fr;
		gap: 5rem;
	}
`;

export const CardImageSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'cardback'
		'cardfront';
	gap: 0rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-template-areas:
			'cardfront'
			'cardback';
		gap: 2rem;
	}
`;

const CardStyles = css`
	--w-h-ratio: calc(447 / 245);

	width: 80%;
	aspect-ratio: var(--w-h-ratio);
	background-size: cover;
	color: var(--clr-neutral-1);
	font-size: var(--fs-100);
	border-radius: var(--br);
	box-shadow: 0px 0px 16px hsl(0 0% 0% / 0.2);

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		font-size: var(--fs-200);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		font-size: var(--fs-300);
	}
`;

export const CardFront = styled.div`
	--p-x: 1rem;

	${CardStyles};

	grid-area: cardfront;
	background-image: url(${BgCardFront});
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: var(--p-x);
	padding-bottom: 0.75rem;
	margin-top: -18%;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		--p-x: 1.5rem;
		padding-bottom: 1rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		margin-top: 0rem;
	}
`;

export const Logo = styled.img`
	width: 2.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		width: 3.5rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		width: 4.5rem;
	}
`;

export const CardDetails = styled.div``;

export const CardNumber = styled.p`
	font-size: clamp(var(--fs-400), 4.3vw, var(--fs-900));
	letter-spacing: 2px;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		font-size: var(--fs-800);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		font-size: var(--fs-900);
	}
`;

export const Details = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
	letter-spacing: 2px;
`;

export const Name = styled.p`
	text-transform: uppercase;
`;

export const Expiry = styled.p``;

export const CardBack = styled.div`
	${CardStyles};

	grid-area: cardback;
	position: relative;
	z-index: 1;
	background-image: url(${BgCardBack});
	margin-left: auto;
`;

export const Cvc = styled.p`
	position: absolute;
	top: 44%;
	right: 11.5%; ;
`;

export const ContentSection = styled.div`
	display: grid;
	align-items: center;
`;

export const Form = styled.form`
	--gap: 1.5rem;

	${flowContent('var(--gap)')};
`;

export const InputWrapper = styled.div``;

export const Label = styled.label`
	display: block;
	text-transform: uppercase;
	font-size: var(--fs-300);
	letter-spacing: 2px;
	color: var(--clr-neutral-4);
`;

export const InputFieldWrapper = styled.div`
	${({ isValid }) =>
		isValid
			? css`
					--bg: var(--clr-neutral-2);
			  `
			: css`
					--bg: var(--clr-primary-3);
			  `};

	width: 100%;
	background: var(--bg);
	border-radius: var(--br);
	padding: 1px;
	margin-top: 0.25rem;

	&:focus-within {
		background: var(--clr-gradient-1);
	}
`;

export const Input = styled.input`
	width: 100%;
	background-color: var(--clr-neutral-1);
	font-size: var(--fs-700);
	border-radius: var(--br);
	padding: 0.5rem 1rem;

	&::placeholder {
		color: hsl(270, 3%, 80%);
	}
`;

export const ErrorMessage = styled.p`
	color: var(--clr-primary-3);
	font-size: var(--fs-100);
	line-height: 1;
	margin-top: 0.5rem;
`;

export const InputFieldsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 2rem;

	${Input} {
		text-align: center;
	}

	${InputFieldWrapper} {
		width: 6.2rem;
	}
`;

export const InputFields = styled.div`
	display: flex;
	gap: 1rem;

	${InputFieldWrapper} {
		width: 4.1rem;
	}
`;

export const Button = styled.button`
	width: 100%;
	background-color: var(--clr-neutral-4);
	color: var(--clr-neutral-1);
	border-radius: var(--br);
	font-size: var(--fs-700);
	padding: 0.75rem 3rem;
	margin-top: 2rem;
`;

export const FormCompleteMessage = styled.div``;

export const Icon = styled.img`
	margin: 0 auto;
`;

export const Message = styled.div`
	text-align: center;
	margin-top: 1rem;
`;

export const Title = styled.h2`
	color: var(--clr-neutral-4);
	text-transform: uppercase;
	letter-spacing: 4px;
`;

export const Subtitle = styled.p`
	color: var(--clr-neutral-3);
	margin-top: 0.5rem;
`;
