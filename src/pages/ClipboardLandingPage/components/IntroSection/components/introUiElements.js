import styled from 'styled-components';
import BgHeaderDesktop from '../../../assets/images/bg-header-desktop.png';
import { flowContent } from '../../../theme/utilities/themeHelperFunctions';

export const Section = styled.section`
	min-height: 100vh;
	background: url(${BgHeaderDesktop});
	background-repeat: no-repeat;
	display: grid;
	padding: var(--p-y) var(--p-x);
`;

export const Content = styled.div`
	--gap: 3rem;
	${flowContent('var(--gap)')};

	margin: auto;
`;

export const ImageWrapper = styled.div`
	width: max-content;
	margin: 0 auto;
`;

export const Image = styled.img`
	object-fit: cover;
`;

export const HeadingWrapper = styled.div`
	text-align: center;
`;

export const Heading = styled.h1``;

export const SubHeading = styled.p`
	max-width: 50ch;
	font-size: 1.2em;
	margin: 1rem auto 0;
`;

export const CTAWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
	}
`;
