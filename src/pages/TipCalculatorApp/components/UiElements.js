import styled, { createGlobalStyle, css } from 'styled-components';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const theme = {
	pallete: {
		primary: {
			strongCyan: 'hsl(172, 67%, 45%)',
		},

		neutral: {
			veryDarkCyan: 'hsl(183, 100%, 15%)',
			darkGrayishCyan: ' hsl(186, 14%, 43%)',
			grayishCyan: 'hsl(184, 14%, 56%)',
			lightGrayishCyan: 'hsl(185, 41%, 84%)',
			veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
			white: 'hsl(0, 0%, 100%)',
		},
	},
	typography: {
		fontFamily: 'Space Mono, sans-serif',
		fontSizes: {
			300: pxToRem(15),
			400: pxToRem(16),
			700: pxToRem(24),
			800: pxToRem(32),
			900: pxToRem(48),
		},
	},
	breakPoints: {
		sm: pxToRem(576),
		lg: pxToRem(992),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.strongCyan};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral.veryDarkCyan};
        --clr-neutral-2: ${({ theme }) =>
					theme.pallete.neutral.darkGrayishCyan};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral.grayishCyan};
        --clr-neutral-4: ${({ theme }) =>
					theme.pallete.neutral.lightGrayishCyan};
        --clr-neutral-5: ${({ theme }) =>
					theme.pallete.neutral.veryLightGrayishCyan};
        --clr-neutral-6: ${({ theme }) => theme.pallete.neutral.white};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300]};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[700]};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[800]};
        --br-1: 1.5rem;
        --br-2: 1rem;
        --br-3: 0.25rem;

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		    --fs-900: ${({ theme }) => theme.typography.fontSizes[900]};

	    }
    };
    body {
        background-color: var(--clr-neutral-4);
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        font-weight: 700;
        display: grid;
        align-items: center;
    };
`;

export const Main = styled.main`
	max-width: 35rem;
	margin: 3rem 0;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin: 3rem auto;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		max-width: 60rem;
	}
`;

export const Logo = styled.img`
	object-fit: cover;
	margin: 0 auto;
`;

export const Container = styled.div`
	--a1: 46;
	--a2: calc(100 - var(--a1));

	background-color: var(--clr-neutral-6);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'inputsection'
		'outputsection';
	gap: 2rem;
	border-radius: var(--br-1);
	padding: 1.5rem;
	margin-top: 2rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		padding: 2rem;
		margin-top: 3rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-template-columns: 1fr calc(var(--a2) / var(--a1) * 1fr);
		grid-template-areas: 'inputsection outputsection';
		gap: 1.5rem;
	}
`;

const flowContent = (value = '1rem') => {
	return css`
		> * ~ * {
			margin-top: ${value};
		}
	`;
};

export const InputSection = styled.div`
	--gap: 2rem;

	${flowContent('var(--gap)')};

	grid-area: inputsection;
	padding: 0.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		padding: 1rem;
	}
`;

export const InputField = styled.div``;

export const InputLabel = styled.label`
	color: var(--clr-neutral-2);
`;

export const InputWrapper = styled.div`
	--border-width: 2px;

	${({ custom }) =>
		custom
			? css`
					--icon-width: 0rem;
					--clr-1: var(--clr-neutral-5);
					--ta: center;
					--py: calc(0.75rem - var(--border-width));
					--px: 0.5rem;
					--mt: 0rem;
			  `
			: css`
					--icon-width: 0.75rem;
					--clr-1: var(--clr-neutral-1);
					--ta: end;
					--py: 0.75rem;
					--px: 1rem;
					--mt: 0.5rem;
			  `};

	background-color: var(--clr-neutral-5);
	display: flex;
	align-items: center;
	position: relative;
	border: 2px solid var(--clr-neutral-5);
	border-radius: var(--br-3);
	padding: var(--py) var(--px);
	margin-top: var(--mt);

	&:focus-within {
		border: var(--border-width) solid var(--clr-primary-1);
	}
`;

export const Icon = styled.img`
	--width: 0.75rem;

	width: var(--width);
	height: calc(var(--width) * 1.5);
	object-fit: cover;
`;

export const Input = styled.input`
	width: calc(100% - var(--icon-width));
	height: var(--fs-800);
	background-color: transparent;
	color: var(--clr-neutral-1);
	font-size: var(--fs-800);
	text-align: var(--ta);
	-moz-appearance: textfield;

	&::placeholder {
		color: var(--clr-neutral-3);
	}

	&::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;

export const InputOptionList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(7.05rem, 1fr));
	gap: 1rem;
	margin-top: 0.5rem;
`;

export const InputOptionListItem = styled.li``;

export const InputOption = styled.p`
	${({ selected }) =>
		selected
			? css`
					--clr-1: var(--clr-primary-1);
					--clr-2: var(--clr-neutral-1);
			  `
			: css`
					--clr-1: var(--clr-neutral-1);
					--clr-2: var(--clr-neutral-6);
			  `};

	background-color: var(--clr-1);
	color: var(--clr-2);
	font-size: var(--fs-800);
	text-align: center;
	line-height: 1;
	border-radius: var(--br-3);
	padding: 0.75rem 0.5rem;
	cursor: pointer;

	&:hover {
		background-color: var(--clr-primary-1);
		color: var(--clr-neutral-1);
	}
`;

export const OutputSection = styled.div`
	grid-area: outputsection;
	background-color: var(--clr-neutral-1);
	color: var(--clr-neutral-6);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: var(--br-2);
	padding: 2rem 1.5rem 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		padding: 2.5rem;
	}
`;

export const Outputs = styled.div`
	--gap: 1.5rem;

	${flowContent('var(--gap)')};

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		--gap: 3rem;
	}
`;

export const OutputWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

export const OutputTitle = styled.h4`
	span {
		font-size: var(--fs-300);
		color: var(--clr-neutral-3);
	}
`;

export const Output = styled.p`
	color: var(--clr-primary-1);
	font-size: var(--fs-900);
	line-height: 1;

	&::before {
		content: '$';
	}
`;

export const Button = styled.button`
	width: 100%;
	background-color: var(--clr-primary-1);
	color: var(--clr-neutral-1);
	font-size: var(--fs-800);
	text-transform: uppercase;
	border-radius: var(--br-3);
	padding: 0.25rem 1.5rem;
	margin-top: 2.5rem;

	&:hover {
		background-color: var(--clr-primary-1);
	}

	&:disabled {
		opacity: 0.2;
		pointer-events: none;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		background-color: var(--clr-neutral-5);
		margin-top: 4rem;
	}
`;
