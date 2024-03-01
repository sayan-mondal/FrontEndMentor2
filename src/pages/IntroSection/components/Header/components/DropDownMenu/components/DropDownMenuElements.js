import styled, { css } from 'styled-components';

export const Container = styled.div`
	--t-t-x: 0%;

	${({ isOpen }) =>
		isOpen
			? css`
					--clr-primary: var(--clr-neutral-3);
					--d: block;
					--t-menu: translateX(var(--t-t-x)) scale(1);
			  `
			: css`
					--clr-primary: var(--clr-neutral-2);
					--d: none;
					--t-menu: translateX(var(--t-t-x)) scale(0);
			  `};

	position: relative;
	padding: var(--p-y-nav-a) var(--p-x-nav-a);
	cursor: pointer;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--t-t-x: 50%;
	}
`;

export const TitleWrapper = styled.div`
	color: var(--clr-primary);
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:hover {
		color: var(--clr-neutral-3);
	}
`;

export const Title = styled.p``;

export const Icon = styled.img`
	object-fit: cover;
`;

export const DropDownMenuWrapper = styled.div`
	--p-y-nav-a: 0.5rem;
	--p-x-nav-a: 1.5rem;

	display: var(--d);
	width: auto;
	background-color: hsl(0 0% 95%);
	position: relative;
	top: 0;
	right: 0;
	transform-origin: 50% 0%;
	transform: var(--t-menu);
	transition: transform 150ms ease-in-out;
	box-shadow: none;
	font-weight: 500;
	border-radius: var(--br-2);
	padding: 1rem 0;
	margin-top: 1rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: block;
		width: max-content;
		background-color: white;
		position: absolute;
		top: 120%;
		right: 50%;
		transition: transform 150ms ease-in-out 50ms;
		box-shadow: 0 0 15px hsl(0 0% 0% / 0.2);
		padding: 1rem 0;
		margin-top: 0;
	}
`;
