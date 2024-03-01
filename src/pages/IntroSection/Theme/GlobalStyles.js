import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --h-header: calc(2 * 1.2rem + 32px);
        --p-x: 1.5rem;
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral[3]};
        --ff: ${({ theme }) => theme.typography.fonts[1]};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300].xs};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400].xs};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900].xs};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2: ${({ theme }) => theme.shapes.borderRadius[2]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            --p-x: 2rem;
            --fs-300: ${({ theme }) => theme.typography.fontSizes[300].sm};
            --fs-400: ${({ theme }) => theme.typography.fontSizes[400].sm};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].sm};
	    }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		    --h-header: calc(2 * 1.2rem + 42px);
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].md};
	    }
    };
    
    body{
        background-color: ${({ theme }) =>
					theme.isNavMenuOpen ? 'hsl(0 0% 0% / 0.5)' : 'var(--clr-neutral-1)'};
        color: var(--clr-neutral-2);
        font-family: var(--ff);
        font-size: var(--fs-400);
        font-weight: 500;      
    };

    h1{
        font-size: var(--fs-900);
    };
`;
