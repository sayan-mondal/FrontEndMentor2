import styled from 'styled-components';

export const Container = styled.header`
	background-color: var(--clr-primary-1);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 1.5rem var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 3rem;
	}
`;

export const Link = styled.a``;

export const Nav = styled.nav``;

export const List = styled.ul`
	font-size: 0.85em;
	display: grid;
	grid-template-columns: repeat(3, max-content);
	align-items: center;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1em;
		gap: 2rem;
	}
`;

export const ListItem = styled.li``;
