import styled, { createGlobalStyle } from 'styled-components';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const theme = {
	pallete: {
		primary: {
			softRed: 'hsl(10, 79%, 65%)',
			cyan: 'hsl(186, 34%, 60%)',
		},

		neutral: {
			darkbrown: 'hsl(25, 47%, 15%)',
			mediumBrown: 'hsl(28, 10%, 53%)',
			cream: 'hsl(27, 66%, 92%)',
			veryPaleOrange: 'hsl(33, 100%, 98%)',
		},
	},
	typography: {
		fontFamily: 'DM Sans, sans-serif',
		fontSizes: {
			200: pxToRem(15),
			300: pxToRem(16),
			400: pxToRem(18),
			700: pxToRem(21),
			800: pxToRem(24),
			900: pxToRem(32),
		},
	},
	breakPoints: {
		sm: pxToRem(576),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.softRed};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary.cyan};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral.darkbrown};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral.mediumBrown};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral.cream};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral.veryPaleOrange};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[200]};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[300]};
        --fs-600: ${({ theme }) => theme.typography.fontSizes[700]};
        --fs-700: ${({ theme }) => theme.typography.fontSizes[800]};

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}){
            --fs-300: ${({ theme }) => theme.typography.fontSizes[300]};
            --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
            --fs-600: ${({ theme }) => theme.typography.fontSizes[800]};
            --fs-700: ${({ theme }) => theme.typography.fontSizes[900]};
    }
    }
    
    body {
        min-height: 100vh;
        background-color: var(--clr-neutral-3);
        font-family:${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        display: flex;
        justify-content: center;
        align-items: center;

        
    }
`;

export const Container = styled.div`
	max-width: ${pxToRem(500)};
`;

export const TopSection = styled.div`
	background-color: var(--clr-primary-1);
	color: var(--clr-neutral-4);
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 1rem;
	padding: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		padding: 1.5rem 2rem;
	}
`;

export const BalanceWrapper = styled.div``;

export const BalanceTitle = styled.h4`
	font-weight: 400;
	opacity: 0.9;
`;

export const Balance = styled.p`
	font-size: var(--fs-600);
	font-weight: 700;
	line-height: 1.4;
`;

export const Image = styled.img`
	object-fit: cover;
`;

export const BottomSection = styled.div`
	background-color: var(--clr-neutral-4);
	color: var(--clr-neutral-2);
	border-radius: 1rem;
	padding: 2rem 1.5rem;
	margin-top: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		padding: 2rem;
	}
`;

export const Title = styled.h1`
	color: var(--clr-neutral-1);
	font-size: var(--fs-700);
	line-height: 1;
`;

export const ChartContainer = styled.div`
	--gap: 0.7rem;
	--max-height: 10rem;
	position: relative;
	/* display: flex; */
	align-items: flex-end;
	display: grid;
	grid-template-columns: repeat(7, minmax(30.89px, 1fr));
	gap: var(--gap);
	padding: 1.5rem 0;
	margin-top: 1rem;

	&::after {
		width: 100%;
		height: 1px;
		content: '';
		background-color: var(--clr-neutral-3);
		position: absolute;
		bottom: 0;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		--gap: 1rem;
	}
`;

export const ChartData = styled.div`
	/* width: max(calc((100% - 6 * var(--gap)) / 7), 30.89px); */
`;

export const Data = styled.div`
	height: ${({ dataValueRatio }) =>
		`calc(var(--max-height) * ${dataValueRatio})`};
	background-color: ${({ dataValueRatio }) =>
		dataValueRatio === 1 ? 'var(--clr-primary-2)' : 'var(--clr-primary-1)'};
	border-radius: 0.3rem;
`;

export const DataFor = styled.p`
	font-size: var(--fs-300);
	text-align: center;
	margin-top: 0.5rem;
`;

export const Stats = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1.5rem;
`;

export const StatTitle = styled.h4`
	font-weight: 400;
`;

export const StatValue = styled.p`
	color: var(--clr-neutral-1);
	font-weight: 700;
`;

export const Stat = styled.div`
	&:nth-of-type(1) {
		${StatValue} {
			font-size: var(--fs-600);
		}
	}

	&:nth-of-type(2) {
		margin-top: auto;
		text-align: right;
	}
`;
