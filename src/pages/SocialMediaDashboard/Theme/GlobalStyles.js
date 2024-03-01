import { createGlobalStyle, css } from 'styled-components';
import { flowContent } from './themeHelperFunction';

export const GlobalStyles = createGlobalStyle`
    :root {
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary[2]};
        --clr-primary-3: ${({ theme }) => theme.pallete.primary[3]};
        --clr-primary-4: ${({ theme }) => theme.pallete.primary[4]};
        --clr-primary-5: ${({ theme }) => theme.pallete.primary[5]};
        --clr-primary-6: ${({ theme }) => theme.pallete.primary[6]};
        --clr-primary-7: ${({ theme }) => theme.pallete.primary[7]};
        --clr-primary-8: ${({ theme }) => theme.pallete.primary[8]};
        --clr-primary-9: ${({ theme }) => theme.pallete.primary[9]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral[3]};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral[4]};
        --clr-neutral-5: ${({ theme }) => theme.pallete.neutral[5]};
        --clr-gradient-1: ${({ theme }) => theme.pallete.gradients[1]};
        --clr-gradient-2: ${({ theme }) => theme.pallete.gradients[2]};
        --ff-primary: ${({ theme }) => theme.typography.fontFamily};
        --fs-200: ${({ theme }) => theme.typography.fontSizes[200].sm};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300].sm};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400].sm};
        --fs-700: ${({ theme }) => theme.typography.fontSizes[700].sm};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800].sm};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900].sm};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2: ${({ theme }) => theme.shapes.borderRadius[2]};
        --circle-d: ${({ theme }) => theme.shapes.circleDiameter[1]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
            --fs-200: ${({ theme }) => theme.typography.fontSizes[200].md};
            --fs-300: ${({ theme }) => theme.typography.fontSizes[300].md};
            --fs-400: ${({ theme }) => theme.typography.fontSizes[400].md};
            --fs-700: ${({ theme }) => theme.typography.fontSizes[700].md};
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].md};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].md};
        }
    };

    body {
        font-family: var(--ff-primary);
        font-size: var(--fs-400);
        background-color: var(--clr-neutral-1);
    };
`;

export const TextStyle1 = css`
	font-size: var(--fs-800);
	font-weight: 700;
	color: var(--clr-neutral-5);
`;

export const TextStyle2 = css`
	color: var(--clr-neutral-4);
	font-weight: 700;
`;

export const CardStyle = css`
	--gap: 1.5rem;
	--p-card-y: 1.5rem;
	--p-card-x: 2rem;

	${flowContent('var(--gap)')};

	background-color: var(--clr-neutral-3);
	border-radius: var(--br-1);
	line-height: 1;
	padding: var(--p-card-y) var(--p-card-x);
`;

export const CardsGridStyle = css`
	--gap-x: 2rem;
	--gap-y: 1.5rem;

	display: grid;
	grid-template-columns: 1fr;
	gap: var(--gap-y) var(--gap-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
