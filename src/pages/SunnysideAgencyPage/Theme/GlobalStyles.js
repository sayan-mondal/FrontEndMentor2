import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --h-header: 5rem;
        --p-x: 2rem;
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary[2]};
        --clr-primary-3: ${({ theme }) => theme.pallete.primary[3]};
        --clr-primary-4: ${({ theme }) => theme.pallete.primary[4]};
        --clr-primary-5: ${({ theme }) => theme.pallete.primary[5]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral[3]};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral[4]};
        --clr-neutral-5: ${({ theme }) => theme.pallete.neutral[5]};
        --ff-1: ${({ theme }) => theme.typography.fonts[1]};
        --ff-2: ${({ theme }) => theme.typography.fonts[2]};
        --fs-200: ${({ theme }) => theme.typography.fontSizes[200].sm};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300].sm};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400].sm};
        --fs-700: ${({ theme }) => theme.typography.fontSizes[700].xs};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800].xs};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900].xs};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2: ${({ theme }) => theme.shapes.borderRadius[2]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
            --p-x: 3rem;
            --fs-700: ${({ theme }) => theme.typography.fontSizes[700].sm};
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].sm};
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].sm};
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
            --h-header: 6rem;
            --fs-800: ${({ theme }) => theme.typography.fontSizes[800].md};
        }
    };
    body{
        color: var(--clr-neutral-1);
        font-family: var(--ff-1);
        font-size: var(--fs-400);
        font-weight: 600;
    };

    h1,h2,h3{
        font-family: var(--ff-2);
		font-weight: 900;
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
