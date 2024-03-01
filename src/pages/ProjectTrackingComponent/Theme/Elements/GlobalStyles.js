import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --clr-primary-1: ${({ theme }) => theme.pallete.primary[1]};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral[1]};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral[2]};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral[3]};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral[4]};
        --ff-1: ${({ theme }) => theme.typography.fontFamily[1]};
        --ff-2: ${({ theme }) => theme.typography.fontFamily[2]};
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300].sm};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400].sm};
        --fs-800: ${({ theme }) => theme.typography.fontSizes[800].sm};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900].xs};
        --br-1: ${({ theme }) => theme.shapes.borderRadius[1]};
        --br-2: ${({ theme }) => theme.shapes.borderRadius[2]};
        --cd-1: ${({ theme }) => theme.shapes.circleDiameters[1]};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900].sm};   
        }
    };

    body{
        font-family: var(--ff-2);
        font-size: var(--fs-400);
    };

    h1,h4 {
	    font-family: var(--ff-1);
    }
`;
