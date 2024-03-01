import styled from 'styled-components';

export const Container = styled.div`
	--column-count: ${({ imagesCount }) => imagesCount};

	display: grid;
	grid-template-columns: repeat(calc(var(--column-count) / 2), 1fr);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(var(--column-count), 1fr);
	}
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
