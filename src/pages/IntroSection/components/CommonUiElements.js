import styled from 'styled-components';
import LogoSvg from '../assets/images/logo.svg';

export const Logo = styled.img.attrs({
	src: LogoSvg,
	alt: 'logo',
})`
	object-fit: cover;
`;

export const NavLink = styled.a`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: var(--p-y-nav-a) var(--p-x-nav-a);

	&:hover {
		color: var(--clr-neutral-3);
	}
`;
