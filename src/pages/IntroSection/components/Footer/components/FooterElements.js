import styled from 'styled-components';

export const Container = styled.footer`
	padding: 2.5rem var(--p-x) 2rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 3rem var(--p-x) 2rem;
	}
`;

export const Link = styled.a`
	width: max-content;
	display: block;
	margin: 0 auto;
`;

export const NavMenu = styled.nav`
	font-weight: 700;
	display: flex;
	justify-content: center;
	gap: 1.5rem;
	margin-top: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 2rem;
	}
`;
