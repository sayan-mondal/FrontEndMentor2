import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const theme = {
	pallete: {
		primary: {
			lightCyan: 'hsl(193, 38%, 86%)',
			neonGreen: 'hsl(150, 100%, 66%)',
		},

		neutral: {
			grayishBlue: 'hsl(217, 19%, 38%)',
			darkGrayishBlue: 'hsl(217, 19%, 24%)',
			darkBlue: 'hsl(218, 23%, 16%)',
		},
	},
	typography: {
		fontFamily: 'Manrope, sans-serif',
		fontSizes: {
			400: pxToRem(16),
			800: pxToRem(20),
			900: pxToRem(24),
		},
	},
	breakPoints: {
		sm: pxToRem(576),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root{
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.lightCyan};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary.neonGreen};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral.grayishBlue};
        --clr-neutral-2: ${({ theme }) =>
					theme.pallete.neutral.darkGrayishBlue};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral.darkBlue};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[800]};

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}){
            --fs-900: ${({ theme }) => theme.typography.fontSizes[900]};
        }
    };

    body{
        background-color: var(--clr-neutral-3);
        color: var(--clr-primary-1);
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        font-weight: 800;
        display: grid;
        justify-content: center;
        align-items: center;
    };
`;

export const Main = styled.main`
	max-width: 30rem;
	background-color: var(--clr-neutral-2);
	border-radius: 1rem;
	position: relative;
	padding: 2.5rem 1.5rem 3.75rem;
	margin: 1.5rem 1.5rem 3.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		padding: 2.5rem 2.5rem 3.75rem;
	}
`;

export const AdviceSkeleton = styled.div``;

// const animation = { opacity: [0.5, 1, 0.5] };
// const transition = { duration: 1.5, repeat: Infinity };

export const SkeletonTitle = styled(motion.div).attrs({
	// animate: { animation },
	// transition: { transition },
})`
	width: 50%;
	height: calc(var(--fs-400) * 0.83 * 1.5);
	background-color: var(--clr-neutral-1);
	margin: 0 auto;
`;

export const SkeletonAdvice = styled(motion.div).attrs({
	// animate: { animation },
	// transition: { transition },
})`
	height: calc(var(--fs-900) * 1.5 * 3);
	background-color: var(--clr-neutral-1);
	margin-top: 1.75rem;
`;

export const AdviceWrapper = styled.div``;

export const Title = styled.h5`
	color: var(--clr-primary-2);
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 3px;
`;

export const Advice = styled.blockquote`
	font-size: var(--fs-900);
	text-align: center;
	margin-top: 1rem;

	&::before {
		content: open-quote;
	}

	&::after {
		content: close-quote;
	}
`;

export const ErrorWrapper = styled.div`
	height: calc(
		(var(--fs-400) * 0.83 * 1.5) + (var(--fs-900) * 1.5 * 3) + 1.75rem
	);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Error = styled.p`
	color: #ff6161;
	text-align: center;
`;

export const Picture = styled.picture`
	margin-top: 1.75rem;
`;

export const Source = styled.source.attrs(({ theme }) => ({
	media: `(max-width:${theme.breakPoints.sm})`,
}))``;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const Button = styled.button.attrs({
	type: 'button',
})`
	width: 3.75rem;
	height: 3.75rem;
	background-color: var(--clr-primary-2);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);

	&:hover {
		box-shadow: 0px 0px 50px var(--clr-primary-2);
	}
`;

export const Icon = styled.img`
	object-fit: cover;
`;
