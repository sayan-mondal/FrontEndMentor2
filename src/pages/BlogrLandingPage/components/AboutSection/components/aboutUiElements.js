import styled from 'styled-components';

export const Section = styled.section`
	padding: var(--p-y-section) 0;
	overflow: hidden;
`;

export const SectionTitle = styled.h2`
	width: 100%;
	text-align: center;
`;

export const SectionContent = styled.div`
	margin-top: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 0;
	}
`;
