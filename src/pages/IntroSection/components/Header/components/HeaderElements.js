import styled, { css } from 'styled-components';

export const Container = styled.header`
	--p-y-h: 1.2rem;
	--gap-nav-a: 0.5rem;
	--p-y-nav-a: 0.5rem;
	--p-x-nav-a: 0;

	height: var(--h-header);
	font-size: var(--fs-300);
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	position: relative;
	padding: var(--p-y-h) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--gap-nav-a: 1rem;
		--p-y-nav-a: 0.25rem;
		--p-x-nav-a: 0.5rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		gap: 3rem;
	}
`;

export const Link = styled.a``;

const FlexStyle1 = css`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const NavMenuWrapper = styled.div`
	--p-y: 0.5rem;

	${({ isNavMenuOpen }) =>
		isNavMenuOpen
			? css`
					--t-nav-menu: scaleX(1);
					--t-nav: 0;
			  `
			: css`
					--t-nav-menu: scaleX(0);
					--t-nav: 100%;
			  `};

	${FlexStyle1};

	width: 70%;
	min-height: 100vh;
	height: max-content;
	position: absolute;
	top: var(--t-nav);
	right: 0;
	background-color: var(--clr-neutral-1);
	transform-origin: right;
	transform: var(--t-nav-menu);
	transition: transform 150ms ease-in-out;
	padding: calc(var(--p-y-h) + var(--p-y)) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: auto;
		min-height: auto;
		flex: 1;
		position: relative;
		top: 0;
		right: 0;
		padding: 0;
		justify-content: space-between;
		gap: var(--gap-nav-a);
		align-items: center;
		transform: none;
	}
`;

export const NavMenuIconWrapper = styled.div`
	padding-bottom: 2rem;
	cursor: pointer;

	* {
		margin-left: auto;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const NavMenu = styled.nav`
	${FlexStyle1};

	gap: var(--gap-nav-a);

	> {
		width: 100%;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-items: center;

		> {
			width: auto;
		}
	}
`;

export const Icon = styled.img`
	object-fit: cover;
`;

export const LoginWrapper = styled.div`
	${FlexStyle1};

	align-items: center;
	gap: 0.5rem;
	margin-top: 1.5rem;

	* {
		width: max-content;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 0;
		gap: var(--gap-nav-a);
	}
`;

export const Button = styled.a`
	width: 100%;
	max-width: 15rem;
	border: 1px solid var(--clr-neutral-2);
	border-radius: var(--br-1);
	text-align: center;
	padding: 0.5rem 1rem;

	&:hover {
		color: var(--clr-neutral-3);
		border: 1px solid var(--clr-neutral-3);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: auto;
		max-width: auto;
	}
`;

export const IconWrapper = styled.div`
	cursor: pointer;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;
