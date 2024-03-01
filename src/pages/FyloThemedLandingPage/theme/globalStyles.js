import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --p-x: 1.5rem;
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary[2]};
        --clr-primary-3: ${({ theme }) => theme.pallete.primary[3]};
        --clr-primary-4: ${({ theme }) => theme.pallete.primary[4]};
        --clr-accent-1: ${({ theme }) => theme.pallete.accent[1]};
        --clr-accent-2: ${({ theme }) => theme.pallete.accent[2]};
        --clr-accent-3: ${({ theme }) => theme.pallete.accent[3]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --ff-1:  ${({ theme }) => theme.typography.fonts[1]};
        --ff-2:  ${({ theme }) => theme.typography.fonts[2]};
        --fs-400:  ${({ theme }) => theme.typography.fontSizes[400].xs};
        --br-1:  ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2:  ${({ theme }) => theme.shapes.borderRadius[2]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
            --p-x: 2.5rem;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
            --p-x: 3rem;
        }
    };

    body {
        font-family: var(--ff-2);
        font-size: var(--fs-400);
        background-color: var(--clr-primary-2);
        color: hsl(0 0% 80%);
    };

    h2,h3 {
        font-family: var(--ff-1);
        color: var(--clr-neutral-1);
        line-height: 1.2;
    }

    h2{
        font-size: 1.9em;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
            font-size: 2.1em;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
            font-size: 2.25em;
        }
    }

    h3{
        font-size: 1.2em;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
            font-size: 1.25em;
        }
    }

    button{
        font-family: var(--ff-1);
        font-weight: 700;
        background: linear-gradient(90deg, var(--clr-accent-1), var(--clr-accent-2));
        color: var(--clr-neutral-1);
        border-radius: var(--br-2);
        padding: 0.5rem 1.75rem;

        :hover{
            background: linear-gradient(90deg, var(--clr-accent-2), var(--clr-accent-1));
        }
    }
`;
