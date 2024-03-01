import styled from 'styled-components';
import LogoSvg from '../assets/images/logo.svg';

export const Logo = styled.img.attrs({
	src: LogoSvg,
	alt: 'logo',
})`
	object-fit: cover;
`;

export const NavLink = styled.a`
	position: relative;
	text-align: center;
	padding: var(--p-y-nl) var(--p-x-nl);

	&::after {
		content: '';
		width: calc(100% - 2 * var(--p-x-nl));
		height: 3px;
		position: absolute;
		top: 100%;
		left: var(--p-x-nl);
		background-color: var(--clr-primary-1);
		transform: scaleX(0);
		transition: transform 150ms ease-in-out;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		&:hover {
			&::after {
				transform: scaleX(1);
			}
		}
	}
`;
