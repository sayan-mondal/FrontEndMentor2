import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
	padding: 1rem 0;
`;

export const Title = styled.h1`
	text-align: center;
`;

export const Main = styled.main`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	padding: 0 3rem 3rem;
	margin-top: 3rem;
`;

export const PageLink = styled(Link)`
	background: ${({ colors }) => colors.bgColor};
	color: ${({ colors }) => colors.color};
	font-size: 1.2rem;
	font-weight: 600;
	text-align: center;
	border-radius: 0.25rem;
	padding: 1rem;
`;
