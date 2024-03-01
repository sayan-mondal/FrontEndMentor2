import styled from 'styled-components';

export const Container = styled.div`
	--clr-primary: ${({ id }) => `var(--clr-primary-${id + 3})`};

	position: relative;
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	width: 70%;
	position: absolute;
	bottom: 10%;
	left: 50%;
	transform: translateX(-50%);
	color: var(--clr-primary);
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		bottom: 15%;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		bottom: 10%;
	}
`;

export const Title = styled.h3``;

export const Subtitle = styled.p`
	margin-top: 1rem;
`;
