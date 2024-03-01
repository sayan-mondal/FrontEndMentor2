import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --p-x: 0;
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary[2]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral[3]};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral[4]};
        --clr-neutral-5: ${({ theme }) => theme.pallete.neutral[5]};
        --clr-neutral-6: ${({ theme }) => theme.pallete.neutral[6]};
        --clr-neutral-7: ${({ theme }) => theme.pallete.neutral[7]};
        --ff: ${({ theme }) => theme.typography.fontFamily[1]};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[300]};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2: ${({ theme }) => theme.shapes.borderRadius[2]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
            --p-x: 2rem;
            --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
            --p-x: 3rem;
        }
    };

    body{
        font-family: var(--ff);
        font-size: var(--fs-400);
        font-weight: 500;
        background-color: var(--clr-neutral-2);
    };

    h1, h2, h3{
	    color: var(--clr-neutral-7);
        font-weight: 800;
        line-height: 1.2;
    }

    h2{
        font-size: 1.5em;
    }

    button {
        color: inherit;
    }
`;
