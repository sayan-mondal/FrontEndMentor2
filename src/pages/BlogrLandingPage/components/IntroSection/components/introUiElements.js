import styled from 'styled-components';
import BgPatternIntroDesktop from '../../../assets/images/bg-pattern-intro-desktop.svg';

export const Section = styled.section`
	min-height: 100vh;
	background: url(${BgPatternIntroDesktop}), var(--clr-gradient-1);
	background-position: 25% 53%, center;
	color: white;
	display: grid;
	align-items: center;
	border-bottom-left-radius: var(--br-2);
	padding-top: var(--h-header);
`;

export const Content = styled.div`
	text-align: center;
	padding: 3rem var(--p-x);
`;

export const Heading = styled.h1`
	color: white;
`;

export const SubHeading = styled.p`
	font-size: var(--fs-600);
	margin-top: 0.5rem;
`;

export const CTAWrapper = styled.div`
	margin-top: 2.5rem;
`;

export const Button1 = styled.button``;

export const Button2 = styled.button`
	background-color: transparent;
	color: var(--clr-neutral-1);
	border: 1px solid var(--clr-neutral-1);
	margin-left: 1rem;
`;
