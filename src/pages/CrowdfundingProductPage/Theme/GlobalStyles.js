import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --p-x: 1.5rem;
        --p-y-header: 1rem;
        --h-header: calc( 2rem + 2 * var(--p-y-header));
        --mw-content: 50rem; 
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary[2]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --ff-1:  ${({ theme }) => theme.typography.fonts[1]};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300].xs};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400].xs};
        --fs-600: ${({ theme }) => theme.typography.fontSizes[600].xs};
        --fs-700: ${({ theme }) => theme.typography.fontSizes[700].xs};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800].xs};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900].xs};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2: ${({ theme }) => theme.shapes.borderRadius[2]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		    --p-x: 3rem;
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].sm};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].sm};
	    }
    };
    
    body{
        font-family: var(--ff-1);
        font-size: var(--fs-400);
        color: var(--clr-neutral-2);
        position: relative;
    };

    h1,h2,h3,h4 {
        color: var(--clr-neutral-1);
    }

    h1 {
        font-size: var(--fs-800);
    }

    section {
        --p-y-section: 2rem;
        --p-x-section: 1.5rem;

	    background-color: white;
	    border-radius: var(--br-1);
	    box-shadow: 0 0 5px hsl(0 0% 0% / 0.15);
	    padding: var(--p-y-section) var(--p-x-section);

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		    --p-y-section: 3rem;
            --p-x-section: 3rem;
	    }
    }

    button {
        --scale: 1;
        --p-y-d: 0.75rem;
        --p-x-d: 1.75rem;
        --p-y: calc(var(--p-y-d) * var(--scale));
	    --p-x: calc(var(--p-x-d) * var(--scale));

        background-color: var(--clr-primary-1);
        color: white;
        font-weight: 500;
        border-radius: var(--br-2);
        padding: var(--p-y) var(--p-x);

        :hover{
            background-color: var(--clr-primary-2);
        }
    }
`;
