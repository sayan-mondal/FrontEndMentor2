import styled from 'styled-components';

export const Layout = styled.div`
	max-width: 90rem;
	position: relative;
	z-index: 1;
`;

export const Main = styled.main``;

export const Backdrop = styled.div`
	position: absolute;
	inset: 0;
	background-color: hsl(0 0% 0% / 0.5);
	z-index: 2;
`;
