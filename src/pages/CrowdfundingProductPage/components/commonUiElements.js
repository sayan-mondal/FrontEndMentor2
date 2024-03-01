import styled, { css } from 'styled-components';
import LogoSvg from '../assets/images/logo.svg';

export const Logo = styled.img.attrs({
	src: LogoSvg,
	alt: 'logo',
})`
	object-fit: cover;
`;

export const NavLink = styled.a`
	--p-y: var(--p-y-a, 0.25rem);
	--p-x: var(--p-x-a, 1rem);

	display: block;
	position: relative;
	font-weight: 500;
	padding: var(--p-y) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		&::after {
			content: '';
			width: calc(100% - 2 * var(--p-x));
			height: 2px;
			position: absolute;
			bottom: 0;
			left: var(--p-x);
			background-color: white;
			transform-origin: left;
			transform: scaleX(0);
			transition: transform 150ms ease-in-out;
		}

		&:hover {
			&::after {
				transform: scaleX(1);
			}
		}
	}
`;

export const Backdrop = styled.div`
	${({ showBackdrop }) => {
		if (showBackdrop === 1)
			return css`
				--zi: 2;
			`;
		if (showBackdrop === 2)
			return css`
				--zi: 1;
			`;
	}};

	position: absolute;
	inset: 0;
	background-color: hsl(0 0% 0% / 0.75);
	z-index: var(--zi);
`;
