import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: 1fr 1fr;
	}
`;
