import styled, { css } from 'styled-components';

export const Logo = styled.img`
	object-fit: cover;
`;

export const NavLink = styled.a`
	${({ type }) =>
		type === 2
			? css`
					background-color: var(--clr-primary-2);
					color: var(--clr-neutral-1);
					font-family: var(--ff-2);
					font-weight: 700;
					text-transform: uppercase;
					border-radius: var(--br-1);
					padding: 0.5rem 1.5rem;
					margin: 0 auto;

					@media screen and (min-width: ${({ theme }) =>
							theme.breakpoints.md}) {
						background-color: var(--clr-neutral-5);
					}
			  `
			: css`
					padding: 0.25rem 1rem;
					margin: 0 auto;
			  `};
`;
