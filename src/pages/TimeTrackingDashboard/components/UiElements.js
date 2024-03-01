import styled, { createGlobalStyle } from 'styled-components';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const theme = {
	pallete: {
		primary: {
			blue: 'hsl(246, 80%, 60%)',
			lightRed1: 'hsl(15, 100%, 70%)',
			softBlue: 'hsl(195, 74%, 62%)',
			lightRed2: 'hsl(348, 100%, 68%)',
			limeGreen: 'hsl(145, 58%, 55%)',
			violet: 'hsl(264, 64%, 52%)',
			softOrange: 'hsl(43, 84%, 65%)',
		},

		neutral: {
			veryDarkBlue: 'hsl(226, 43%, 10%)',
			darkBlue: 'hsl(235, 46%, 20%)',
			desaturatedBlue1: 'hsl(235, 45%, 61%)',
			paleBlue: 'hsl(236, 100%, 87%)',
			desaturatedBlue2: 'hsl(235, 45%, 34%)',
		},
	},
	typography: {
		fontFamily: 'Rubik, sans-serif',
		fontSizes: {
			400: pxToRem(15),
			700: pxToRem(18),
			800: {
				xs: pxToRem(24),
				lg: pxToRem(32),
				xl: pxToRem(40),
			},
			900: {
				xs: pxToRem(32),
				sm: pxToRem(36),
				md: pxToRem(40),
				lg: pxToRem(48),
				xl: pxToRem(56),
			},
		},
	},
	styles: {
		borderRadius: pxToRem(16),
	},
	breakPoints: {
		sm: pxToRem(576),
		md: pxToRem(768),
		lg: pxToRem(992),
		xl: pxToRem(1200),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.blue};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary.lightRed1};
        --clr-primary-3: ${({ theme }) => theme.pallete.primary.softBlue};
        --clr-primary-4: ${({ theme }) => theme.pallete.primary.lightRed2};
        --clr-primary-5: ${({ theme }) => theme.pallete.primary.limeGreen};
        --clr-primary-6: ${({ theme }) => theme.pallete.primary.violet};
        --clr-primary-7: ${({ theme }) => theme.pallete.primary.softOrange};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral.veryDarkBlue};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral.darkBlue};
        --clr-neutral-3: ${({ theme }) =>
					theme.pallete.neutral.desaturatedBlue1};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral.paleBlue};
        --clr-neutral-5: ${({ theme }) =>
					theme.pallete.neutral.desaturatedBlue2};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        --fs-700: ${({ theme }) => theme.typography.fontSizes[700]};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800].xs};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900].xs};
        --br-1: ${({ theme }) => theme.styles.borderRadius};

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}){
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].sm};
        }

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].md};
        }

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}){
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].lg};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].lg};
        }

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}){
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].xl};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].xl};
        }
    };

    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        font-weight: 300;
        background-color: var(--clr-neutral-1);
        color: white;
        display: grid;
        align-items: center;
    };
`;

export const Main = styled.main`
	max-width: 75rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	padding: 4rem 1.5rem;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
		padding: 4rem 3rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const UserCardWrapper = styled.div`
	/* grid-column: span 3; */

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		grid-column: span 2;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		grid-column: span 3;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-column: auto;
		grid-row: span 2;
	}
`;

export const StatsCardWrapper = styled.div``;
