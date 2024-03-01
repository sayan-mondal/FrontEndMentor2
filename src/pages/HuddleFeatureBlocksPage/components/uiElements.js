import styled, { css } from 'styled-components';
import BgHeroDesktop from '../assets/images/bg-hero-desktop.svg';
import { flowContent } from '../theme/themeHelperFunctions';

export const Layout = styled.div`
	max-width: 90rem;
	position: relative;
	margin: 0 auto;
`;

export const Main = styled.main``;

export const Section = styled.section`
	padding: var(--p-y-section) var(--p-x);
`;

export const Wrapper = styled.div``;

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const P = styled.p``;

export const Button = styled.button`
	--p-y-button: 1rem;
`;

export const ImageWrapper = styled.div`
	max-width: 25rem;
	width: 100%;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: none;
	}
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const IntroSection = styled(Section)`
	min-height: 100vh;
	background-color: var(--clr-neutral-1);
	background-image: url(${BgHeroDesktop});
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	gap: 3rem;
	padding: calc(var(--h-header) + var(--p-y-section)) var(--p-x)
		var(--p-y-section);

	${Wrapper} {
		max-width: 50ch;
		text-align: center;
		margin: 0 auto;

		${P} {
			color: var(--clr-neutral-2);
			margin-top: 1rem;
		}

		${Button} {
			margin-top: 1.5rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;

		${Wrapper} {
			text-align: left;
			margin: 0;
		}
	}
`;

export const FeaturesSection = styled(Section)`
	--gap: 2rem;

	${flowContent('var(--gap)')};

	padding-top: calc(1.5 * var(--p-y-section));

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--gap: 3rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: calc(2 * var(--p-y-section));
	}
`;

const WrapperStyle = css`
	border-radius: var(--br-1);
	box-shadow: 0px 0px 15px hsl(0 0% 0% / 0.15);
`;

export const FeatureWrapper = styled.div`
	${WrapperStyle};

	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'image'
		'text';
	align-items: center;
	gap: 3rem;
	padding: 2rem;

	${Wrapper} {
		grid-area: text;
		max-width: 50ch;
		text-align: center;

		${P} {
			margin-top: 1rem;
		}
	}

	${ImageWrapper} {
		grid-area: image;
		max-width: 15rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: 1.5fr 1fr;
		grid-template-areas: 'text image';
		gap: 2rem;
		padding: 2.5rem;

		${Wrapper} {
			text-align: left;
		}

		${ImageWrapper} {
			max-width: none;
		}

		&:nth-of-type(even) {
			grid-template-columns: 1fr 1.75fr;
			grid-template-areas: 'image text';

			${Wrapper} {
				margin-left: auto;
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 5rem;
		padding: 3rem 2.5rem;
		padding-left: 5rem;
	}
`;

export const CTAWrapper = styled.div`
	background: linear-gradient(transparent 50%, var(--clr-neutral-2) 50%);
	padding: var(--p-y-section) var(--p-x);

	${Wrapper} {
		${WrapperStyle};

		max-width: 50rem;
		background-color: white;
		text-align: center;
		padding: 2rem 1.75rem;
		margin: 0 auto;

		${H2} {
			font-size: 1.75em;
		}

		${Button} {
			margin-top: 1.75rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		${Wrapper} {
			padding: 3rem;
		}
	}
`;
