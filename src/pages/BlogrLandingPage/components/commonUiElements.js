import styled, { css } from 'styled-components';
import LogoSvg from '../assets/images/logo.svg';
import { flowContent } from '../theme/utilities/themeHelperFunctions';

export const Logo = styled.img.attrs({
	src: LogoSvg,
	alt: 'logo',
})`
	max-width: 5rem;
	object-fit: cover;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		max-width: auto;
	}
`;

export const NavLink = styled.a`
	font-family: var(--ff-1);
	font-weight: 600;
	padding: var(--p-y-a, 0.5rem) var(--p-x-a, 0.5rem);
`;

export const NavSubLink = styled.a`
	font-family: var(--ff-2);
	font-weight: 400;
	padding: var(--p-y-a, 0.5) var(--p-x-a, 1rem);
`;

export const TextImageWrapper = styled.div`
	--grid-tc: 1fr;
	--grid-ta: 'image' 'text';
	--p-r: var(--p-x);
	--p-l: var(--p-x);
	--picture-l: 0;

	display: grid;
	grid-template-columns: var(--grid-tc);
	grid-template-areas: var(--grid-ta);
	gap: 2rem;
	padding-right: var(--p-r);
	padding-left: var(--p-l);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		${({ imageRight }) =>
			imageRight
				? css`
						--grid-tc: minmax(25ch, 1fr) 1fr;
						--grid-ta: 'text image';
						--p-r: 0;
						--p-l: var(--p-x);
						--picture-l: 5%;

						@media screen and (min-width: ${({ theme }) =>
								theme.breakpoints.lg}) {
							--grid-tc: minmax(50ch, 1fr) 1.25fr;
						}
				  `
				: css`
						--grid-tc: 1fr minmax(25ch, 1fr);
						--grid-ta: 'image text';
						--p-r: var(--p-x);
						--p-l: 0;
						--picture-l: 0.5%;

						@media screen and (min-width: ${({ theme }) =>
								theme.breakpoints.lg}) {
							--grid-tc: 1.25fr minmax(50ch, 1fr);
						}
				  `};

		gap: 1rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		gap: 3rem;
	}
`;

export const TextWrapper = styled.div`
	grid-area: text;
	display: grid;
	align-items: center;
	text-align: center;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		text-align: left;
		margin: 0;
	}
`;

export const TextList = styled.ul`
	--gap: 2rem;
	${flowContent('var(--gap)')};
`;

export const TextListItem = styled.li`
	max-width: 50ch;
`;

export const TextTitle = styled.h3``;

export const Text = styled.p`
	margin-top: 0.5rem;
`;

export const ImageWrapper = styled.div`
	grid-area: image;
	width: 100%;
	max-width: 21rem;
	position: relative;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: none;
		margin: auto 0;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin: 0;
	}
`;

export const Picture = styled.picture`
	width: 100%;
	position: relative;
	left: var(--picture-l);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		transform: scale(1.1);
	}
`;

export const Source = styled.source.attrs(({ theme }) => ({
	media: `(max-width:${theme.breakpoints.md})`,
}))`
	width: 100%;
	object-fit: cover;
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
