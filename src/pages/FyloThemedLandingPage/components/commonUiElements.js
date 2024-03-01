import styled from 'styled-components';
import LogoSvg from '../assets/images/logo.svg';

export const Logo = styled.img.attrs({
	src: LogoSvg,
	alt: 'logo',
})`
	max-width: 5rem;
	width: 100%;
	object-fit: cover;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		max-width: 7rem;
	}
`;

export const NavLink = styled.a`
	--p-y-a: 0.25rem;
	--p-x-a: 0.5rem;

	font-family: var(--ff-1);
	color: var(--clr-neutral-1);
	letter-spacing: 1px;
	position: relative;
	padding: var(--p-y-a) var(--p-x-a);

	&::after {
		content: '';
		height: 1px;
		position: absolute;
		background-color: currentColor;
		bottom: 0;
		left: var(--p-x-a);
		right: var(--p-x-a);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 150ms ease-in-out;
	}

	&:hover {
		&::after {
			transform: scaleX(1);
		}
	}
`;
