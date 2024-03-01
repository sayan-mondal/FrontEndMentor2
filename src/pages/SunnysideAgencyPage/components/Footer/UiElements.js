import styled from 'styled-components';
import { Logo } from '../CommonUiElements';

export const Container = styled.footer`
	background-color: hsl(167, 44%, 70%);
	color: var(--clr-primary-5);
	display: grid;
	place-items: center;
	gap: 1.5rem;
	padding: 3rem var(--p-x);
`;

export const FooterLogo = styled(Logo)`
	mix-blend-mode: normal;
`;

export const NavMenu = styled.nav``;

export const Col1 = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

export const Col2 = styled.div`
	--clr-primary-2: var(--clr-neutral-5);

	display: grid;
	margin-top: 1rem;
`;

export const SocialMediaIcons = styled.div`
	display: flex;
	gap: 1.5rem;
	margin-top: 1.5rem;
`;

export const Link = styled.a``;

export const Icon = styled.img``;
