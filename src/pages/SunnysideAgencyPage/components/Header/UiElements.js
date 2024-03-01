import styled, { css } from 'styled-components';
import ImageHeader from '../../assets/images/desktop/image-header.jpg';

export const HeaderContainer = styled.header`
	height: var(--h-header);
	background: url(${ImageHeader});
	color: var(--clr-neutral-5);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 1.5rem var(--p-x);
`;

export const Link = styled.a`
	display: inline-block;
`;

export const HeaderRightSection = styled.div``;

export const MobileNavMenuIcon = styled.div`
	display: block;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const Icon = styled.img`
	object-fit: cover;
`;

export const NavMenu = styled.nav`
	--p: 2rem;

	${({ showMobileNavMenu }) =>
		showMobileNavMenu
			? css`
					--t-values: scale(1);
					--o: 1;
			  `
			: css`
					--t-values: scale(0);
					--o: 0;
			  `};

	width: 80%;
	position: absolute;
	top: 100%;
	right: 10%;
	clip-path: polygon(0 10%, 95% 10%, 100% 0, 100% 100%, 0 100%);
	background-color: var(--clr-neutral-5);
	color: var(--clr-neutral-2);
	transform-origin: 100% 0%;
	transform: var(--t-values);
	opacity: var(--o);
	z-index: 1;
	border-radius: var(--br-2);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	box-shadow: 0 0 15px hsl(0 0% 100% / 0.2);
	transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;
	padding: calc(2 * var(--p)) var(--p) var(--p);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: auto;
		clip-path: none;
		background-color: transparent;
		color: var(--clr-neutral-5);
		position: relative;
		top: 0;
		right: 0;
		flex-direction: row;
		transform: none;
		opacity: 1;
		box-shadow: none;
		padding: 0;
	}
`;
