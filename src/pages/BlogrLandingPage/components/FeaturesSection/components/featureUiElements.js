import styled from 'styled-components';
import BgPatternCircles from '../../../assets/images/bg-pattern-circles.svg';

export const Section = styled.section`
	--p-b: calc(1.5 * var(--p-y-section));

	overflow: hidden;
	padding: 0 0 var(--p-b);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1rem 0 var(--p-b);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: var(--p-y-section) 0 var(--p-b);
	}
`;

export const Heading = styled.div`
	background: url(${BgPatternCircles}), var(--clr-gradient-2);
	background-size: 20rem, auto;
	background-repeat: no-repeat;
	background-position: 0% 0%, center;
	color: white;
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-bottom-left-radius: var(--br-2);
	border-top-right-radius: var(--br-2);
	position: relative;
	padding: 2rem var(--p-x) 5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		background-size: 50%, auto;
		background-position: 0% 0%, center;
		grid-template-columns: 13rem auto;
		gap: 2rem;
		padding: 0 3rem 0 var(--p-x);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 13rem auto;
		gap: 5rem;
		padding: 0 4rem 0 var(--p-x);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: 15rem auto;
		gap: 7rem;
		padding: 0 4rem 0 var(--p-x);
	}
`;

export const HeadingImageWrapper = styled.div`
	max-width: 13rem;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: none;
		position: relative;
		transform: scale(1.4);
		transform-origin: left;
		left: -10%;
		margin: 10% 0 0;
	}
`;

export const HeadingImage = styled.img`
	object-fit: cover;
`;

export const TitleWrapper = styled.div`
	max-width: 55ch;
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: left;
		padding: 2rem 0;
	}
`;

export const Title = styled.h2`
	color: white;
`;

export const SubTitle = styled.p`
	margin-top: 0.5rem;
`;

export const SectionContent = styled.div`
	padding-top: 2rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: 3rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding-top: 5rem;
	}
`;
