import styled from 'styled-components';

export const Container = styled.footer`
	background-color: hsl(0 0% 95%);
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	padding: 3rem var(--p-x) 2rem;
	margin-top: 3rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		gap: 3rem;
		padding: var(--p-y) var(--p-x);
	}
`;

export const A = styled.a`
	width: 2.5rem;
	margin: auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: auto 0;
	}
`;

export const Image = styled.img`
	object-fit: cover;
`;

export const NavMenu = styled.nav``;

export const NavLinkList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.5rem;
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(3, auto);
		gap: 1rem 1.5rem;
		text-align: left;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: repeat(5, auto);
	}
`;

export const NavLinkListItem = styled.li``;

export const NavLink = styled.a`
	width: 100%;
	color: var(--clr-neutral-1);
	padding: 0.25rem 0.5rem;

	&:hover {
		color: var(--clr-primary-1);
	}
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const ListItem = styled.li``;

export const Link = styled.a`
	border-radius: 50%;
	padding: 0.5rem;

	&:hover {
		background-color: var(--clr-primary-1);
	}
`;

export const Icon = styled.img`
	${Link}:hover & {
		filter: contrast(500%) brightness(500%) invert(100%);
	}
`;
