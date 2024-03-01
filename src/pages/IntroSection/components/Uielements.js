import styled from 'styled-components';

export const Layout = styled.div`
	max-width: 90rem;
	height: ${({ isNavMenuOpen, mobileNavMenuHeight }) =>
		isNavMenuOpen ? mobileNavMenuHeight : 'auto'};
	margin: 0 auto;
	overflow: hidden;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		height: auto;
		overflow: visible;
	}
`;

export const Main = styled.main`
	padding: 0 var(--p-x);
`;
