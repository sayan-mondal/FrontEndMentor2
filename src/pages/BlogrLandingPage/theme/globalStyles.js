import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --p-x: 1.5rem;
        --p-y-header: 1.5rem;
        --h-logo: 2rem;
        --h-header: calc(var(--h-logo) + 2 * var(--p-y-header));
        --p-y-section: 3rem;
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary[2]};
        --clr-primary-3: ${({ theme }) => theme.pallete.primary[3]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral[3]};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral[4]};
        --clr-gradient-1: ${({ theme }) => theme.pallete.gradients[1]};
        --clr-gradient-2: ${({ theme }) => theme.pallete.gradients[2]};
        --ff-1: ${({ theme }) => theme.typography.fonts[1]};
        --ff-2: ${({ theme }) => theme.typography.fonts[2]};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300].xs};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400].xs};
        --fs-600: ${({ theme }) => theme.typography.fontSizes[600].xs};
        --fs-700: ${({ theme }) => theme.typography.fontSizes[700].xs};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800].xs};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900].xs};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2: ${({ theme }) => theme.shapes.borderRadius[2]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		    --p-x: 2rem;
            --fs-700: ${({ theme }) => theme.typography.fontSizes[700].sm};
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].sm};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].sm};
	    }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		    --p-x: 3rem;
            --h-logo: 3rem;
            --fs-700: ${({ theme }) => theme.typography.fontSizes[700].md};
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].md};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].md};
	    }
    };

    body{
        font-family: var(--ff-1);
        font-size: var(--fs-400);
        font-weight: 300;
        color: var(--clr-neutral-3);
    };

    h1, h2,h3 {
        font-weight: 600;
        color: var(--clr-primary-3);
        line-height: 1.2;
    }

    h1 {
        font-size: var(--fs-900);
    }

    h2 {
        font-size: var(--fs-800);
    }

    h3 {
        font-size: var(--fs-700);
    }

    button{
        --p-y-b: 0.65rem;
        --p-x-b: 1.5rem;

        font-family: var(--ff-2);
	    font-weight: 700;
        background-color: var(--clr-neutral-1);
        color: var(--clr-primary-1);
        border-radius: 3rem;
        padding: var(--p-y-b) var(--p-x-b); 

        :hover {
            background-color: var(--clr-primary-2);
            color: var(--clr-neutral-1);
        }
    }
`;
