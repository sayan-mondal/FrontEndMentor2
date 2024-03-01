import styled, { css } from 'styled-components';

export const Container = styled.header`
	height: var(--h-header);
	width: 100%;
	color: var(--clr-neutral-1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	gap: 2rem;
	z-index: 3;
	padding: var(--p-y-header) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		justify-content: normal;
	}
`;

export const Link = styled.a``;

export const NavMenuWrapper = styled.div`
	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 100%;
	}
`;

export const IconWrapper = styled.div`
	margin-left: auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const Icon = styled.img`
	object-fit: cover;
`;

export const NavMenu = styled.nav`
	--p-y-a: 0.75rem;
	--p-x-a: 0.5rem;

	${({ isMobileNavMenuOpen }) =>
		isMobileNavMenuOpen
			? css`
					--t-nav: scale(1);
			  `
			: css`
					--t-nav: scale(0);
			  `}

	background-color: var(--clr-neutral-1);
	color: black;
	font-size: var(--fs-600);
	display: flex;
	flex-direction: column;
	position: absolute;
	top: calc(100% - var(--p-y-header) / 2);
	left: var(--p-x);
	right: var(--p-x);
	transform: var(--t-nav);
	transform-origin: 100% 0%;
	border-radius: var(--br-1);
	transition: transform 150ms ease-in-out;
	padding: 1rem 1rem calc(0.5rem + var(--p-y-a));

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--p-y-a: 0.5rem;

		background-color: transparent;
		color: var(--clr-neutral-1);
		font-size: var(--fs-400);
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		left: 0;
		right: 0;
		transform: none;
		border-radius: 0;
	}
`;

export const NavLinkList = styled.ul`
	--clr: hsl(0 0% 90%);

	display: flex;
	flex-direction: column;
	position: relative;
	padding: 0.5rem 0;

	&:after {
		content: '';
		height: 1px;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: var(--clr);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		&:after {
			display: none;
		}
	}
`;

export const NavLinkListItem = styled.li``;

export const NavSubLinkList = styled.ul``;

export const NavSubLinkListItem = styled.li`
	--p-y-a: 0.5rem;
	--p-x-a: 1.5rem;

	a {
		width: 100%;
		text-align: center;

		&:hover {
			color: var(--clr-primary-1);
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: var(--fs-300);

		a {
			text-align: left;
		}
	}
`;

export const LoginNav = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem 0;

	a {
		width: 100%;
		text-align: center;
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

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		a {
			width: auto;
		}
		flex-direction: row;
		gap: 1rem;
	}
`;

export const Button = styled.button`
	--p-x-b: 1.75rem;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		background: var(--clr-gradient-1);
		color: var(--clr-neutral-1);
	}
`;
