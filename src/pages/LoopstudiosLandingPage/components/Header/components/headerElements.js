import styled, { css } from 'styled-components';

export const Container = styled.header`
	--p-y: 2rem;

	width: 100%;
	height: var(--h-header);
	color: var(--clr-primary-1);
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2.5rem;
	padding: var(--p-y) var(--p-x);
`;

export const Link = styled.a``;

export const IconWrapper = styled.div`
	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const NavMenuWrapper = styled.div`
	--p-y: 2rem;
	${({ isMobileNavMenuOpen }) =>
		isMobileNavMenuOpen
			? css`
					--t: scaleY(1);
					--o: 1;
			  `
			: css`
					--t: scaleY(0);
					--o: 0;
			  `};

	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	background-color: var(--clr-primary-2);
	opacity: var(--o);
	transform: var(--t);
	transform-origin: top;
	transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;
	padding: var(--p-y) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--p-y: 2.5rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--t: none;
		--o: 1;

		width: auto;
		min-height: auto;
		flex-direction: row;
		position: relative;
		background-color: transparent;
		padding: 0;
	}
`;

export const MobileNavMenuHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const Icon = styled.img`
	object-fit: cover;
	cursor: pointer;
`;

export const NavMenu = styled.nav`
	--p-x-nl: 0;
	--p-y-nl: 0.5rem;

	font-family: var(--ff-2);
	font-size: var(--fs-600);
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin: auto 0;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--p-x-nl: 1rem;

		font-family: var(--ff-1);
		font-size: var(--fs-400);
		flex-direction: row;
		text-transform: none;
		letter-spacing: normal;
		margin: 0;
	}
`;
