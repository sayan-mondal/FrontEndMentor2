import styled from 'styled-components';

export const Container = styled.header`
	height: var(--h-header);
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	padding: var(--p-y-header) var(--p-x);
`;

export const Link = styled.a``;

export const Nav = styled.nav``;

export const Button = styled.button`
	background-color: white;
	color: var(--clr-neutral-2);
	font-size: var(--fs-300);
	transition: color 150ms ease-in-out, filter 150ms ease-in-out;

	&:hover {
		color: var(--clr-primary-1);
	}
`;
