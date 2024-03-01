import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --p-x: 1.5rem;
        --p-y-header: 2rem;
        --h-header: calc(2rem + 2 * var(--p-y-header));
        --p-y-section: 3.5rem;
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral[3]};
        --ff-1: ${({ theme }) => theme.typography.fonts[1]};
        --ff-2: ${({ theme }) => theme.typography.fonts[2]};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300]};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2: ${({ theme }) => theme.shapes.borderRadius[2]};

        @media screen and (min-width:${({ theme }) => theme.breakpoints.sm}){
            --p-x: 3rem;
            --p-y-header: 1.5rem;
            --h-header: calc(3rem + 2 * var(--p-y-header));
        };
    };

    body{
        font-family: var(--ff-2);
        font-size: var(--fs-300);
        color: var(--clr-neutral-3);

        @media screen and (min-width:${({ theme }) => theme.breakpoints.md}){
            font-size: var(--fs-400);
        };
    };

    h1,h2{
        font-family: var(--ff-1);
        font-weight: 600;
        color: var(--clr-neutral-2);
        line-height: 1.2;
    }

    h1{
        font-size: 2em;
    }

    button{
        --p-y-button: 0.5rem;
        --p-x-button: 2rem;

        font-weight: 700;
        background-color: var(--clr-primary-1);
        color: var(--clr-neutral-1);
        border-radius: var(--br-2);
	    box-shadow: 0px 2px 15px hsl(0 0% 0% / 0.2);
        padding: var(--p-y-button) var(--p-x-button);
        transition: filter 150ms ease-in-out;

        :hover{
            filter: saturate(170%);
        };

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		    --p-y-button: 0.75rem;
            --p-x-button: 3rem;
        }
    }
`;
