import styled from 'styled-components';

export const Section = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'title' 'content' 'button';
	gap: 2.5rem;
	padding: var(--p-y) var(--p-x) calc(var(--p-y) + 2rem);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: 1fr auto;
		grid-template-areas: 'title button' 'content content';
	}
`;

export const Title = styled.h2`
	grid-area: title;
`;

export const Button = styled.a`
	grid-area: button;
	text-transform: uppercase;
	letter-spacing: 3px;
	line-height: 1;
	border: 1px solid;
	border-radius: var(--br-1);
	padding: 0.75rem 2rem;
	margin: auto auto;

	&:hover {
		background-color: var(--clr-primary-2);
		color: var(--clr-primary-1);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: auto 0 auto auto;
	}
`;

export const Content = styled.div`
	grid-area: content;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const Card = styled.div`
	position: relative;
	cursor: pointer;
`;

export const Picture = styled.picture``;

export const Source = styled.source.attrs(({ theme }) => ({
	media: `(max-width:${theme.breakpoints.sm})`,
}))`
	width: 100%;
	object-fit: cover;
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const CardTitleWrapper = styled.div`
	background: linear-gradient(180deg, transparent, hsl(0 0% 0% / 0.75));
	position: absolute;
	inset: 0;

	${Card}:hover & {
		background: linear-gradient(180deg, transparent, hsl(0 0% 100% / 0.75));
	}
`;

export const CardTitle = styled.h3`
	max-width: 12ch;
	color: var(--clr-primary-1);
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	padding: 1rem 1.5rem;

	${Card}:hover & {
		color: var(--clr-primary-2);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 1.5rem 1.95rem;
	}
`;
