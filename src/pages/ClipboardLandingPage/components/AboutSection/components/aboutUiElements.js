import styled from 'styled-components';
import { flowContent } from '../../../theme/utilities/themeHelperFunctions';

export const Section = styled.section`
	--gap: 2rem;

	${flowContent('var(--gap)')};

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--gap: 3rem;
	}
`;

export const SubSectionWrapper = styled.div`
	padding: var(--p-y) var(--p-x);
`;

export const SubSectionTitleWrapper = styled.div`
	text-align: center;
`;

export const SubSectionTitle = styled.h2``;

export const SubSectionSubTitle = styled.p`
	max-width: 50ch;
	font-size: 1.1em;
	margin: 0.75rem auto 0;
`;

export const SubSectionContent = styled.div`
	margin-top: 2.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 3rem;
	}
`;

export const ImageWrapper = styled.div`
	width: 100%;
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const H3 = styled.h3``;

export const P = styled.p`
	max-width: 30rem;
	margin: 0.5rem auto 0;
`;

export const IconWrapper = styled.div`
	width: max-content;
	height: 40px;
	margin: 0 auto;
`;

export const Icon = styled.img`
	height: 100%;
	object-fit: cover;
`;

export const SubSectionContent1 = styled(SubSectionContent)`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2.5rem;
	text-align: center;

	${ImageWrapper} {
		width: 70%;
		margin: 0 auto;
	}

	${List} {
		--gap: 1.5rem;

		${flowContent('var(--gap)')}

		margin: auto;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: 1.5fr 1fr;
		gap: 5rem;
		text-align: left;

		${ImageWrapper} {
			width: 100%;
			margin: 0;
		}

		${List} {
			--gap: 2rem;
		}
	}
`;

export const SubSectionContent2 = styled(SubSectionContent)`
	${ImageWrapper} {
		width: 70%;
		margin: 0 auto;
	}
`;

export const SubSectionContent3 = styled(SubSectionContent)`
	${List} {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}

	${ListItem} {
		text-align: center;
	}

	${H3} {
		margin-top: 1rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		${List} {
			grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
			gap: 3rem;
		}
	}
`;

export const SubSectionContent4 = styled(SubSectionContent)`
	margin-top: 0;

	${List} {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
		gap: 2.5rem;
	}

	${ImageWrapper} {
		max-width: 5rem;
		margin: 0 auto;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		${List} {
			grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
			gap: 5rem;
		}

		${ImageWrapper} {
			max-width: 7rem;
		}
	}
`;

export const SubSectionContent5 = styled(SubSectionContent)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
	}
`;
