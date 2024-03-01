import styled from 'styled-components';
import { flowContent } from '../../../theme/themeHelperFunctions';

export const Container = styled.footer`
	background-color: var(--clr-neutral-2);
	color: hsl(0 0% 80%);
	padding: 2.5rem var(--p-x);
`;

export const Link = styled.a`
	img {
		filter: contrast(0%) brightness(200%);
	}
`;

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2.5rem;
	margin-top: 1.25rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
		gap: 5rem;
		margin-top: 2rem;
	}
`;

export const Address = styled.address`
	--gap: 1.25rem;

	${flowContent('var(--gap)')};

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--gap: 1.5rem;
	}
`;

export const Div = styled.div`
	display: grid;
	grid-template-columns: max-content auto;
	gap: 1rem;
`;

export const IconWrapper = styled.div`
	--fs: var(--fs-300);

	margin-top: calc(0.25 * var(--fs));

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--fs: var(--fs-400);
	}
`;

export const Icon = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const P = styled.p`
	max-width: 35ch;
`;

export const Nav = styled.nav`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
	gap: 2rem 3rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
	}
`;

export const List = styled.ul`
	--gap: 0.5rem;

	${flowContent('var(--gap)')};
`;

export const ListItem = styled.li``;

export const A = styled.a`
	padding: 0.25rem 0;
`;

export const Span = styled.span`
	border-bottom: 1px solid transparent;

	${A}:hover & {
		color: white;
		border-bottom: 1px solid;
	}
`;
