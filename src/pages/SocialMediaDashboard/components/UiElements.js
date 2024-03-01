import styled from 'styled-components';
import { CardsGridStyle, TextStyle1, TextStyle2 } from '../Theme/GlobalStyles';

export const Container = styled.div`
	max-width: 75rem;
	padding: 2.5rem 2em;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 2rem 3rem 3rem;
	}
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	line-height: 1;

	hr {
		border-top: 2px solid var(--clr-primary-8);
		opacity: 0.35;
		margin-top: 0.35rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const HeaderLeftSection = styled.div``;

export const Logo = styled.h2`
	${TextStyle1};

	font-size: var(--fs-800);
`;

export const Stat = styled.p`
	${TextStyle2};

	margin-top: 0.5rem;
`;

export const HeaderRightSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.75rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		justify-content: center;
	}
`;

export const ThemeName = styled.p`
	${TextStyle2};
	font-size: var(--fs-300);
`;

export const Toggle = styled.div`
	--h-circle: var(--circle-d);
	--p: 0.2rem;
	--h: calc(var(--h-circle) + (2 * var(--p)));
	--w: calc(var(--h) + var(--h-circle) + var(--p));

	--l-circle: ${({ themeId }) =>
		themeId ? 'calc(100% - (var(--h-circle) + var(--p)))' : 'var(--p)'};

	width: var(--w);
	height: var(--h);
	background: var(--clr-gradient-2);
	border-radius: var(--br-2);
	position: relative;
	padding: var(--p);
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		top: var(--p);
		left: var(--l-circle);
		width: var(--h-circle);
		height: var(--h-circle);
		background-color: var(--clr-neutral-3);
		border-radius: 50%;
		transition: left 250ms ease-in-out;
	}
`;

export const Main = styled.main`
	--mt-main: 2.5rem;

	margin-top: var(--mt-main);
`;

export const MainTopSection = styled.section`
	${CardsGridStyle};
`;

export const MainBottomSection = styled.section`
	margin-top: var(--mt-main);
`;

export const SectionTitle = styled.h3`
	${TextStyle1};

	font-size: var(--fs-700);
	line-height: 1;
`;

export const StatsWrapper = styled.div`
	${CardsGridStyle};

	margin-top: 1.5rem;
`;

export const PlatformStatCardsWrapper = styled.div`
	display: grid;
	gap: var(--gap-y) var(--gap-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		&:last-of-type {
			grid-column: span 2;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		&:last-of-type {
			grid-column: auto;
			grid-template-columns: auto;
		}
	}
`;
