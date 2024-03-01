import styled from 'styled-components';

export const Section = styled.section`
	min-height: 100vh;
	display: grid;
	align-items: center;
	padding: var(--p-y) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 100vh;
		min-height: auto;
	}
`;

export const Content = styled.div`
	position: relative;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 100%;
	}
`;

export const Picture = styled.picture`
	height: 100%;
`;

export const Source = styled.source.attrs(({ theme }) => ({
	media: `(max-width:${theme.breakpoints.sm})`,
}))`
	object-fit: cover;
	height: 100%;
`;

export const Image = styled.img`
	object-fit: cover;
	height: 100%;
`;

export const TextContent = styled.div`
	--p-y: 0;
	--p-x: 2rem;

	max-width: 50ch;
	background-color: var(--clr-primary-1);
	position: relative;
	bottom: 0;
	right: 0;
	text-align: center;
	padding: var(--p-y) var(--p-x);
	margin: 3rem auto 0;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--p-y: 3rem;
		--p-x: 3rem;

		position: absolute;
		text-align: left;
		padding: var(--p-y) 0 0 var(--p-x);
		margin: 0;
	}
`;

export const Title = styled.h2``;

export const Subtitle = styled.p`
	color: var(--clr-neutral-2);
	margin-top: 0.5rem;
`;
