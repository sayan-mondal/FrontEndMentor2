import styled from 'styled-components';
import { flowContent } from '../../../theme/utilities/themeHelperFunctions';

export const Container = styled.footer`
	--gap: 2rem;

	${flowContent('var(--gap)')}

	background-color: var(--clr-primary-3);
	gap: 2rem 3rem;
	padding: 2rem var(--p-x);
`;

export const ImageWrapper = styled.div`
	grid-column: span 2;
`;

export const Wrapper = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Address = styled.address`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	${Wrapper} {
		&:nth-of-type(1) {
			grid-row: span 2;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: max-content max-content;
		gap: 1rem 2rem;
	}
`;

export const IconWrapper = styled.div`
	width: max-content;
	margin-top: 0.25rem;
`;

export const Icon = styled.img`
	object-fit: cover;
`;

export const P = styled.p`
	max-width: 30ch;
`;

export const Nav = styled.nav`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(max-content, 12ch));
	justify-content: center;
	gap: 2rem;
	margin-top: 3rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(3, max-content);
		gap: 5rem;
	}
`;

export const List = styled.ul`
	--gap: 0.5rem;

	${flowContent('var(--gap)')}
`;

export const ListItem = styled.li``;
