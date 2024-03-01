import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --p-x: 1.5rem;
        --p-y: 3rem;
        --h-header: 7rem;
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary[2]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --ff-1: ${({ theme }) => theme.typography.fonts[1]};
        --ff-2: ${({ theme }) => theme.typography.fonts[2]};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300].sm};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400].sm};
        --fs-600: ${({ theme }) => theme.typography.fontSizes[600].xs};
        --fs-700: ${({ theme }) => theme.typography.fontSizes[700].xs};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800].xs};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900].xs};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
    
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		    --p-x: 2rem;
            --fs-700: ${({ theme }) => theme.typography.fontSizes[700].sm};
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].sm};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].sm};
	    }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		    --p-x: 3rem;
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].md};
	    }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            --fs-700: ${({ theme }) => theme.typography.fontSizes[700].lg};
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].lg};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].lg};
	    }
    };

    body{
        font-family: var(--ff-1);
        font-size: var(--fs-400);
    };

    h1, h2, h3{
        font-family: var(--ff-2);
        font-weight: 300;
        line-height: 1.2;
	    text-transform: uppercase;
    }

    h1{
        font-size: var(--fs-900);
    }

    h2{
        font-size: var(--fs-800);
    }

    h3{
        font-size: var(--fs-700);
    }
`;
