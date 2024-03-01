import styled from 'styled-components';
import ImageHeroDesktop from '../../../assets/images/desktop/image-hero.jpg';
import ImageHeroMobile from '../../../assets/images/mobile/image-hero.jpg';

export const Container = styled.div`
	--clr-bg: hsl(0 0% 0% / 0.5);

	min-height: 100vh;
	background-image: url(${ImageHeroMobile});
	background-size: cover;
	background-position: center;
	background-color: var(--clr-bg);
	background-blend-mode: darken;
	color: var(--clr-primary-1);
	padding-top: var(--h-header);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		background-image: url(${ImageHeroDesktop});
	}
`;

export const Section = styled.section`
	min-height: calc(100vh - var(--h-header));
	display: grid;
	align-items: center;
	padding: var(--p-y) var(--p-x);
`;

export const Heading = styled.h1`
	max-width: 14ch;
	border: 2px solid;
	padding: 1.75rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 2rem;
	}
`;
