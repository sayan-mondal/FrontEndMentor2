import styled from 'styled-components';

export const Container = styled.div`
	height: calc(100vh - var(--h-header));
	position: relative;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	width: 100%;
	position: absolute;
	top: 20%;
`;

export const Heading = styled.h1`
	color: var(--clr-neutral-5);
	text-transform: uppercase;
	letter-spacing: 0.75rem;
	text-align: center;
`;

export const IconWrapper = styled.div`
	width: 5%;
	margin: 1rem auto 0;
`;

export const Icon = styled.img`
	object-fit: cover;
`;
