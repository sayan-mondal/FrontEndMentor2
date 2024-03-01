import styled from 'styled-components';
import { NavLink } from '../../commonUiElements';

export const Container = styled.header`
	--p-y: 3rem;

	background-color: var(--clr-neutral-4);
	color: var(--clr-neutral-2);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border-top-right-radius: var(--br-2);
	padding: var(--p-y) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const Link = styled.a`
	margin: 0 auto;
`;

export const NavMenu = styled.nav`
	width: 100%;
`;

export const NavLinkList = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: flex;
		justify-content: space-evenly;
	}
`;

export const NavLinkListItem = styled.li`
	--p-y-a: 0.5rem;
	--p-x-a: 0.75rem;

	margin: 0 auto;

	&:nth-of-type(3) {
		grid-column: span 2;
	}
`;

export const Title = styled(NavLink).attrs({
	as: 'p',
})`
	color: var(--clr-neutral-1);
`;

export const NavSubLinkList = styled.ul`
	margin-top: 0.5rem;
`;

export const NavSubLinkListItem = styled.li`
	a {
		width: 100%;
		position: relative;

		&:after {
			content: '';
			height: 2px;
			position: absolute;
			top: calc(100% - var(--p-y-a));
			left: var(--p-x-a);
			right: var(--p-x-a);
			background-color: currentColor;
			transform: scale(0);
			transition: transform 150ms ease-in-out;
		}

		&:hover {
			&:after {
				transform: scale(1);
			}
		}
	}
`;
