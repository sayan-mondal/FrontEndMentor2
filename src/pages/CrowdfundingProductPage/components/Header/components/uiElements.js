import styled, { css } from 'styled-components';

export const Container = styled.header`
	width: 100%;
	height: var(--h-header);
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
	padding: var(--p-y-header) var(--p-x);
`;

export const Link = styled.a``;

export const NavMenuWrapper = styled.div``;

export const IconWrapper = styled.div`
	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
	}
`;

export const Icon = styled.img`
	object-fit: cover;
`;

export const NavMenu = styled.nav`
	${({ isMobileNavMenuOpen }) =>
		isMobileNavMenuOpen
			? css`
					--t: scale(1);
			  `
			: css`
					--t: scale(0);
			  `}

	background-color: white;
	color: var(--clr-neutral-1);
	position: absolute;
	top: calc(100%);
	left: var(--p-x);
	right: var(--p-x);
	border-radius: var(--br-1);
	transform: var(--t);
	transform-origin: top right;
	transition: transform 150ms ease-in-out;
	padding: 0.5rem 0;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--t: none;

		background-color: transparent;
		color: white;
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		border-radius: 0;
		padding: 0;
	}
`;

export const NavMenuList = styled.ul`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
		gap: 0.5rem;
	}
`;

export const NavMenuListItem = styled.li`
	--p-y-a: 0.75rem;
	--p-x-a: 1.5rem;

	position: relative;

	&:not(:nth-last-of-type(1)) {
		&::after {
			content: '';
			height: 1px;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: var(--clr-neutral-2);
			opacity: 0.15;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--p-y-a: 0.25rem;
		--p-x-a: 1rem;

		&::after {
			display: none;
		}
	}
`;
