import styled from 'styled-components';

export const Container = styled.footer`
	--p-y: 3rem;

	background-color: var(--clr-primary-2);
	color: var(--clr-primary-1);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'logo' 'navmenu' 'socialmediaicons' 'copyrights';
	gap: 1rem;
	padding: var(--p-y) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 1.5rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr max-content;
		grid-template-areas: 'logo socialmediaicons' 'navmenu copyrights';
		gap: 2rem;
	}
`;

export const Link = styled.a`
	grid-area: logo;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0;
	}
`;

export const NavMenu = styled.nav`
	--p-x-nl: 0;
	--p-y-nl: 0.5rem;

	grid-area: navmenu;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.25rem;
	padding: 0.5rem 0 1rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
		gap: 2rem;
		padding: 0;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--p-x-nl: 0rem;

		justify-content: normal;
		gap: 2rem;
	}
`;

export const SocialMediaIconsWrapper = styled.div`
	grid-area: socialmediaicons;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		justify-content: flex-end;
	}
`;

export const SocialMediaIconWrapper = styled.div`
	cursor: pointer;
`;

export const Icon = styled.img`
	object-fit: cover;
	transition: transform 150ms ease-in-out;

	${SocialMediaIconWrapper}:hover & {
		transform: scale(1.05) translateY(-0.5rem);
	}
`;

export const Copyrights = styled.p`
	grid-area: copyrights;
	color: var(--clr-neutral-1);
	font-size: var(--fs-300);
	text-align: center;
	padding: 0.5rem 0;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		text-align: right;
		line-height: calc(1.5 * var(--fs-400));
	}
`;
