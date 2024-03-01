import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4rem var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 4rem 2rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 3rem;
	}
`;

export const Title = styled.h3`
	color: var(--clr-neutral-3);
	text-transform: uppercase;
	text-align: center;
	letter-spacing: 5px;
`;

export const TestimonialsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.5rem;
	margin-top: 1rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 2rem;
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 3rem;
		grid-template-columns: repeat(3, 1fr);
	}
`;
