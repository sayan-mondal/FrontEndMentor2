import styled from 'styled-components';

export const Container = styled.div`
	--h-header: 4rem;
	--p-x: 2rem;

	min-height: 100vh;
	max-width: 90rem;
	margin: 0 auto;
	position: relative;

	&::before {
		content: '';
		width: 46%;
		height: 50%;
		background-color: var(--clr-neutral-4);
		position: absolute;
		top: 0;
		right: 0;
		border-bottom-left-radius: var(--br-1);
		z-index: -1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--p-x: 3rem;

		&::before {
			width: 43%;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--h-header: 5rem;
		--p-x: 3rem;

		&::before {
			width: 43%;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		--p-x: 4rem;

		&::before {
			width: 46%;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		&::before {
			width: 50%;
		}
	}
`;

export const Header = styled.header`
	height: var(--h-header);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 1rem var(--p-x);
`;

export const HeaderLeftSection = styled.div``;

export const Link = styled.a`
	&:focus {
		outline: none;
	}

	&:hover,
	:focus {
		text-decoration: underline;
		transform: scale(1.05);
	}
`;

export const Logo = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const HeaderRightSection = styled.div``;

export const Icon = styled.img`
	cursor: pointer;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
	}
`;

export const NavMenu = styled.nav`
	display: flex;
	width: 80%;
	background-color: white;
	position: absolute;
	top: 115%;
	left: 50%;
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 0px 15px hsl(0 0% 0% / 0.2);
	border-radius: var(--br-2);
	transform-origin: 100% 0%;
	transform: ${({ showMobileNavMenu }) =>
		showMobileNavMenu
			? 'translateX(-50%) scale(1)'
			: 'translateX(-50%) scale(0)'};
	opacity: ${({ showMobileNavMenu }) => (showMobileNavMenu ? 1 : 0)};
	transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;
	padding: 0.75rem 1.5rem;

	hr {
		background-color: var(--clr-neutral-3);
		width: 100%;
		height: 1px;
		opacity: 0.5;
		margin: 0.5rem 1rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: flex;
		width: auto;
		background-color: transparent;
		position: relative;
		top: 0;
		left: 0;
		flex-direction: row;
		box-shadow: none;
		border-radius: 0;
		transform: none;
		opacity: 1;
		padding: 0;

		hr {
			width: var(--cd-1);
			height: var(--cd-1);
			border-radius: 50%;
			margin: 0 1rem;
		}
	}
`;

export const NavLink = styled(Link)`
	color: var(--clr-neutral-1);
	font-family: var(--ff-1);
	font-weight: 700;
	text-transform: uppercase;
	padding: 0.5rem 1rem;

	&:nth-of-type(4) {
		color: var(--clr-neutral-3);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.25rem 1rem;
	}
`;

export const Main = styled.main`
	--p-t: 2rem;
	--p-b: 5rem;

	min-height: calc(100vh - var(--h-header));
	display: grid;
	align-items: center;
	grid-template-columns: 1fr;
	grid-template-areas: 'image' 'content';
	gap: 3rem;
	/* opacity: ${({ showMobileNavMenu }) =>
		showMobileNavMenu ? '0.7' : '1'};  */
	padding: var(--p-t) 0 var(--p-b) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--p-t: 3rem;
		--p-b: 3rem;

		grid-template-columns: 1fr 0.8fr;
		grid-template-areas: 'content image';
		gap: 1rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		grid-template-columns: 1fr 1.2fr;
	}
`;

export const MainLeftSection = styled.div`
	grid-area: content;
	max-width: 30rem;
	padding-right: var(--p-x);
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: initial;
		padding-right: 0;
	}
`;

export const Heading1 = styled.h4`
	text-transform: uppercase;
	color: var(--clr-neutral-3);
	font-weight: 400;
	letter-spacing: 2px;
	display: flex;
	align-items: center;
	gap: 2ch;
`;

export const Badge = styled.span`
	display: inline-block;
	background-color: var(--clr-neutral-1);
	color: var(--clr-neutral-4);
	letter-spacing: 0;
	font-weight: 700;
	line-height: 1;
	border-radius: var(--br-1);
	padding: 0.2rem 0.65rem;
`;

export const Heading2 = styled.h1`
	color: var(--clr-neutral-1);
	font-size: var(--fs-900);
	line-height: 1;
	text-transform: uppercase;
	margin-top: 1rem;
`;

export const SubHeading = styled.p`
	color: var(--clr-neutral-2);
	font-size: var(--fs-800);
	margin-top: 1.25rem;
`;

export const CallToAction = styled.div`
	font-family: var(--ff-1);
	font-size: var(--fs-800);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	text-align: center;
	margin-top: 2.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 1rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		gap: 1.5rem;
	}
`;

export const Button = styled.a`
	background-color: var(--clr-primary-1);
	color: white;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 1px;
	border-radius: var(--br-2);
	padding: 0.5rem 1.5rem;

	&:hover,
	&:focus {
		opacity: 0.9;
	}
`;

export const Description = styled.span`
	color: var(--clr-neutral-3);
	text-transform: uppercase;
	letter-spacing: 4px;
`;

export const MainRightSection = styled.div`
	max-width: 25rem;
	grid-area: image;
	width: 100%;
	margin-left: auto;
	overflow-x: hidden;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: initial;
		margin-left: 0;
	}
`;

export const ImageWrapper = styled.div`
	width: 140%;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 150%;
	}
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
