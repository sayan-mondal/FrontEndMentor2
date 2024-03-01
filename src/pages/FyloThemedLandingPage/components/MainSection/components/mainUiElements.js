import styled from 'styled-components';
import { flowContent } from '../../../theme/utilities/themeHelperFunctions';
import BgQuotes from '../../../assets/images/bg-quotes.png';
import BgCurvyDesktop from '../../../assets/images/bg-curvy-desktop.svg';
import BgCurvyMobile from '../../../assets/images/bg-curvy-mobile.svg';

export const Main = styled.main``;

export const Section = styled.section`
	--p-y-section: 3.5rem;

	padding: var(--p-y-section) var(--p-x);
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const HeadingWrapper = styled.div``;

export const H2 = styled.h2``;

export const P = styled.p``;

export const Button = styled.button``;

export const H3 = styled.h3``;

export const Wrapper = styled.div``;

export const A = styled.a``;

export const Icon = styled.img`
	object-fit: cover;
`;

export const InnerWrapper = styled.div``;

export const Span = styled.span``;

export const IntroSection = styled(Section)`
	--gap: 2rem;
	--h-bg: calc(100vw * 0.376);
	--lg-p: calc(70vw + var(--h-bg));

	${flowContent('var(--gap)')};

	display: grid;
	justify-content: center;
	background-color: var(--clr-primary-1);
	background-image: url(${BgCurvyMobile});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: bottom;
	padding-top: 0.5rem;

	> * {
		margin-left: auto;
		margin-right: auto;
	}

	${ImageWrapper} {
		width: 100%;
	}

	${HeadingWrapper} {
		max-width: 70ch;
		text-align: center;
		margin-top: 1.5rem;
	}

	${P} {
		max-width: 55ch;
		font-size: 1.1em;
		margin: 1rem auto 0;
	}

	${Button} {
		padding: 0.75rem 3rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		background-image: url(${BgCurvyDesktop});

		${ImageWrapper} {
			width: 60%;
		}

		${P} {
			font-size: 1.17em;
		}
	}
`;

export const FeaturesSection = styled(Section)`
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
`;

export const FeatureWrapper = styled.div`
	text-align: center;

	${ImageWrapper} {
		width: 5rem;
		margin-left: auto;
		margin-right: auto;
	}

	${H3} {
		margin-top: 1rem;
	}

	${P} {
		max-width: 55ch;
		margin: 0.75rem auto 0;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 2rem;
	}
`;

export const AboutSection = styled(Section)`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	${ImageWrapper} {
		width: 100%;
		margin: auto;
	}

	${Wrapper} {
		margin: auto;

		${P} {
			max-width: 55ch;
			margin-top: 1rem;
		}

		${A} {
			width: max-content;
			color: var(--clr-accent-1);
			display: flex;
			gap: 1ch;
			position: relative;
			padding: 0.25rem 0;
			margin-top: 1.5rem;

			${Icon} {
				object-fit: contain;
				transform-origin: left;
			}

			&::after {
				content: '';
				height: 1px;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				background-color: currentColor;
			}

			&:hover {
				filter: drop-shadow(0 0 0 var(--clr-accent-2));

				${Icon} {
					transform: scale(1.25);
				}
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		${ImageWrapper} {
			width: 60%;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
		gap: 3rem;

		${ImageWrapper} {
			width: 100%;
		}
	}
`;

export const TestimonialSection = styled(Section)`
	background: url(${BgQuotes});
	background-repeat: no-repeat;
	background-position: var(--p-x) 1rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	padding: var(--p-y-section) calc(var(--p-x) + 0.5rem);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
	}
`;

export const TestimonialWrapper = styled.div`
	background-color: var(--clr-primary-4);
	border-radius: var(--br-1);
	padding: 1.75rem;

	${Wrapper} {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 1.5rem;

		${ImageWrapper} {
			width: 2.5rem;

			${Image} {
				border-radius: 50%;
			}
		}

		${Span} {
			display: block;
			font-size: 0.8em;

			&:nth-of-type(1) {
				color: var(--clr-neutral-1);
				font-weight: 700;
				font-size: 0.9em;
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 2rem;
	}
`;

export const CTASection = styled(Section)`
	background: linear-gradient(
		var(--clr-primary-2) 50%,
		var(--clr-primary-3) 50%
	);
`;

export const CTAWrapper = styled.div`
	--gap: 1.75rem;

	${flowContent('var(--gap)')};

	max-width: 50rem;
	background-color: var(--clr-primary-1);
	text-align: center;
	border-radius: var(--br-1);
	filter: drop-shadow(0 3px 5px var(--clr-primary-3));
	padding: 1.75rem;
	margin: 0 auto;

	${H3} {
		font-size: 1.75em;
	}

	${P} {
		margin-top: 1rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 2rem 3rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		${H3},${P} {
			padding: 0 3rem;
		}

		${H3} {
			font-size: 2em;
		}
	}
`;

export const Form = styled.form`
	--p-y-fi: 0.75rem;
	--p-x-fi: 1.5rem;

	max-width: 25rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: normal;
	gap: 1rem;
	margin-left: auto;
	margin-right: auto;

	${Button} {
		padding: var(--p-y-fi) var(--p-x-fi);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: none;
		flex-direction: row;
		align-items: center;
		gap: 1.5rem;
	}
`;

export const EmailInput = styled.input.attrs({
	type: 'email',
	placeholder: 'Enter your email',
	required: true,
})`
	flex: 1;
	border: 2px solid var(--clr-neutral-1);
	border-radius: var(--br-2);
	padding: var(--p-y-fi) var(--p-x-fi);

	&::placeholder {
		opacity: 0.7;
	}

	&:focus {
		border-color: var(--clr-accent-1);
	}

	&:not(:placeholder-shown):invalid {
		border-color: var(--clr-accent-3);
	}
`;
