import styled from 'styled-components';

export const Container = styled.div`
	--mh: calc(100vh - var(--h-header));
	--gap: 2rem;
	--p-y: 1rem;
	--p-x: 0;
	--h-gi: 36px;
	--p-gs: 0.5rem;

	--h-gs: calc(var(--h-gi) + 2 * var(--p-gs));

	min-height: var(--mh);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'image' 'text' 'images';
	grid-template-rows: auto auto var(--h-gs);
	gap: var(--gap);
	padding: var(--p-y) var(--p-x);
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--gap: 3rem;
		--p-y: 2rem;
		--p-x: 0rem;

		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'text image' 'images images';
		grid-template-rows: auto var(--h-gs);
		gap: var(--gap);
		margin: 0;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--p-y: 2rem;
		--p-x: 2rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'text image' 'images image';
	}
`;

export const TextSection = styled.div`
	grid-area: text;
	display: grid;
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: left;
	}
`;

export const TextWrapper = styled.div`
	max-width: 27.5rem;
	padding-top: 1rem;
	margin: auto auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding-top: 0;
		margin: auto 0;
	}
`;

export const Heading = styled.h1`
	color: var(--clr-neutral-3);
	line-height: 1;
`;

export const SubHeading = styled.p`
	max-width: 40ch;
	margin: 1rem auto 0;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 1.5rem 0 0;
	}
`;

export const Button = styled.a`
	--clr-1: var(--clr-neutral-3);
	--clr-2: var(--clr-neutral-1);

	background-color: var(--clr-1);
	color: var(--clr-2);
	font-weight: 700;
	border-radius: var(--br-1);
	border: 1px solid var(--clr-neutral-3);
	padding: 0.75rem 2rem;
	margin: 2rem auto 0;

	&:hover {
		--clr-1: var(--clr-neutral-1);
		--clr-2: var(--clr-neutral-3);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 2.5rem 0 0;
	}
`;

export const ImageSection = styled.div`
	grid-area: image;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Picture = styled.picture``;

export const Source = styled.source`
	object-fit: cover;
`;

export const Image = styled.img`
	object-fit: cover;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-height: calc(var(--mh) - 2 * var(--p-y) - var(--h-gs) - var(--gap));
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-height: calc(var(--mh) - 2 * var(--p-y));
	}
`;

export const GallerySection = styled.div`
	grid-area: images;
`;

export const GalleryImagesWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1.5rem;
	padding: 0.5rem 0;
`;

export const GalleryImageWrapper = styled.div``;

export const GalleryImage = styled.img`
	width: 100%;
	object-fit: cover;
`;
