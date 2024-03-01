import styled, { css } from 'styled-components';
import { flowContent } from '../../../../Theme/Utilities/themeHelperFunctions';

export const Container = styled.div`
	${({ type }) => {
		if (type === 2)
			return css`
				--clr-primary: var(--clr-primary-1);
				--template: 'image text';
				--img-align: flex-end;
			`;
		return css`
			--clr-primary: var(--clr-primary-2);
			--template: 'text image';
			--img-align: center;
		`;
	}};

	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'image' 'text';
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas: var(--template);
		text-align: left;
	}
`;

export const TextWrapper = styled.div`
	grid-area: text;
	display: flex;
	align-items: center;
`;

export const TextInnerWrapper = styled.div`
	--gap: 1.5rem;

	${flowContent('var(--gap)')};
	padding: 5rem var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 13%;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 10%;
	}
`;

export const Title = styled.h2`
	line-height: 1.2;
`;

export const SubTitle = styled.p`
	color: var(--clr-neutral-3);
`;

export const Link = styled.a`
	display: inline-block;
	font-family: var(--ff-2);
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 1px;
	position: relative;
	margin-left: 0.5rem;

	&::after {
		content: '';
		width: 110%;
		height: 40%;
		position: absolute;
		top: 55%;
		left: -5%;
		background-color: var(--clr-primary);
		opacity: 0.5;
		z-index: -1;
	}
`;

export const ImageWrapper = styled.div`
	grid-area: image;
	background-color: var(--clr-primary);
	display: flex;
	align-items: var(--img-align);
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
