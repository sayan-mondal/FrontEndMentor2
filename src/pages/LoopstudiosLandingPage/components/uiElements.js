import styled from 'styled-components';

export const Layout = styled.div`
	--h: ${({ isMobileNavMenuOpen }) => (isMobileNavMenuOpen ? '100vh' : 'auto')};

	max-width: 90rem;
	height: var(--h);
	position: relative;
	margin: 0 auto;
	overflow: hidden;
`;

export const Main = styled.main``;
