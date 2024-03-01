import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --p-x: 1.5rem;
        --p-y: 2rem;
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary[2]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --ff-1: ${({ theme }) => theme.typography.fonts[1]};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400].xs};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            --p-x: 2.5rem;
            --p-y: 3rem;
            --fs-400: ${({ theme }) => theme.typography.fontSizes[400].sm};
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		    --p-x: 3rem;
	    }
    };
    
    body{
        font-family: var(--ff-1);
        font-size: var(--fs-400);
        color: var(--clr-neutral-2);

    };

    h1,h2,h3{
        color: var(--clr-neutral-1);
        font-weight: 600;
        line-height: 1.2;
    }

    h1{
        font-size: 2em;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 2.2em;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 2.5em;
        }
    }

    h2{
        font-size: 1.7em;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 1.8em;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 2em;
        }
    }

    h3{
        font-size: 1.2em;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 1.3em;
        }
    }

    button{
        font-weight: 600;
        border-radius: var(--br-1);
        padding: 0.5rem 1.75rem;
    }
`;
