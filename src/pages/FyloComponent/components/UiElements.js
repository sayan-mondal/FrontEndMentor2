import styled, { createGlobalStyle, css } from 'styled-components';
import BgDesktop from '../assets/images/bg-desktop.png';
import BgMobile from '../assets/images/bg-mobile.png';

const pxToRem = (value) => {
	return `${value / 16}rem`;
};

export const theme = {
	pallete: {
		primary: {
			primary1: 'hsl(6, 100%, 80%)',
			primary2: 'hsl(335, 100%, 65%)',
		},

		neutral: {
			paleBlue: 'hsl(243, 100%, 93%)',
			grayishBlue: 'hsl(229, 7%, 55%)',
			darkBlue: 'hsl(228, 56%, 26%)',
			veryDarkBlue: 'hsl(229, 57%, 11%)',
		},
	},
	typography: {
		fontFamily: 'Raleway, sans-serif',
		fontSizes: {
			300: pxToRem(14),
			400: pxToRem(16),
			900: pxToRem(32),
		},
	},
	breakPoints: {
		lg: pxToRem(992),
		sm: pxToRem(576),
	},
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --clr-primary-1: ${({ theme }) => theme.pallete.primary.primary1};
        --clr-primary-2: ${({ theme }) => theme.pallete.primary.primary2};
        --clr-neutral-1: ${({ theme }) => theme.pallete.neutral.paleBlue};
        --clr-neutral-2: ${({ theme }) => theme.pallete.neutral.grayishBlue};
        --clr-neutral-3: ${({ theme }) => theme.pallete.neutral.darkBlue};
        --clr-neutral-4: ${({ theme }) => theme.pallete.neutral.veryDarkBlue};
        --clr-gradient-1: linear-gradient(90deg, var(--clr-primary-1), var(--clr-primary-2));
        --fs-300: ${({ theme }) => theme.typography.fontSizes[300]};
        --fs-400: ${({ theme }) => theme.typography.fontSizes[400]};
        --fs-900: ${({ theme }) => theme.typography.fontSizes[900]};
    };
    body {
        background-color: var(--clr-neutral-4);
        background-image: url(${BgMobile});
        background-repeat: no-repeat;
        background-size: cover;
        color: var(--clr-neutral-1);
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: var(--fs-400);
        display: grid;
        align-items: center;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
        background-image: url(${BgDesktop});
        background-position: top 35vh left 10%;
    };

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
        background-image: url(${BgDesktop});
        background-position: top 50vh left 10%;
    };
}
`;

export const Container = styled.div`
	max-width: 32rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	margin: 3rem 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin: 3rem auto;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		max-width: 60rem;
		grid-template-columns: 1fr 1.75fr;
		align-items: end;
	}
`;

const SectionStyles = css`
	--br: 0.75rem;
	--p: 2rem;

	background-color: var(--clr-neutral-3);
	border-radius: var(--br);
	padding: var(--p);

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		--p: 2.5rem;
	}
`;

export const LogoSection = styled.div`
	${SectionStyles};

	max-width: 21rem;
	border-top-right-radius: calc(10 * var(--br));
	padding-right: calc(3 * var(--p));

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		max-width: none;
	}
`;

export const Logo = styled.img`
	object-fit: cover;
`;

export const IconList = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 2rem;
`;

export const IconLink = styled.a`
	--w: 2.75rem;

	width: var(--w);
	height: var(--w);
	background-color: var(--clr-neutral-4);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
`;

export const Icon = styled.img`
	object-fit: cover;
`;

export const StorageDataSection = styled.div`
	${SectionStyles};

	height: max-content;
	position: relative;
`;

export const Info = styled.p`
	span {
		opacity: 0.8;
	}
`;

export const InfoTooltipWrapper = styled.label`
	--h-after: 1rem;

	position: absolute;
	right: 50%;
	bottom: 0;
	transform: translate(50%, 50%);

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		right: var(--p);
		bottom: calc(100% + var(--h-after) - var(--p) - var(--fs-400) / 2);
		transform: translate(0, 0);
	}
`;

export const InfoTooltip = styled.p`
	--bg: white;
	--p-x: 0.75rem;

	background-color: var(--bg);
	color: black;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	position: relative;
	line-height: 1;
	border-radius: 0.5rem;
	padding: var(--p-x) 1.25rem;

	strong {
		font-size: var(--fs-900);
	}

	b {
		color: var(--clr-neutral-2);
		text-transform: uppercase;
		font-size: var(--fs-300);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		border-bottom-right-radius: 0;

		&::after {
			content: '';
			width: var(--h-after);
			height: var(--h-after);
			background-color: var(--bg);
			clip-path: polygon(0 0, 100% 0, 100% 100%);
			position: absolute;
			top: 100%;
			right: 0;
		}
	}
`;

export const CustomMeter = styled.div`
	--value-fraction: ${({ value, min, max }) => `${value / (max - min)}`};
	--h: 1rem;

	background-color: var(--clr-neutral-4);
	border-radius: 1rem;
	padding: 0.125rem;
	margin-top: 0.65rem;
`;

export const Meter = styled.div`
	--p: 0.125rem;

	width: calc(var(--h) + (100% - var(--h)) * var(--value-fraction));
	height: var(--h);
	background: var(--clr-gradient-1);
	position: relative;
	border-radius: 1rem;

	&::after {
		--w: calc(var(--h) - 2 * var(--p));
		content: '';
		width: var(--w);
		height: var(--w);
		background-color: var(--clr-neutral-1);
		position: absolute;
		top: var(--p);
		right: var(--p);
		border-radius: 50%;
	}
`;

export const MeterLabelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 0.35rem;
`;

export const MeterLabel = styled.label`
	font-size: var(--fs-300);
	font-weight: 700;
`;
