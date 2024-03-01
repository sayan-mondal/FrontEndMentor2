import styled from 'styled-components';
import LogoSvg from '../assets/images/logo.svg';

export const Logo = styled.img.attrs({
	src: LogoSvg,
	alt: 'logo',
})`
	max-width: 7rem;
	width: 100%;
	object-fit: cover;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 10rem;
	}
`;
