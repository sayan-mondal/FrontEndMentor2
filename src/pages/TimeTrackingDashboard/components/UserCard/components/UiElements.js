import styled from 'styled-components';

export const Card = styled.div`
	--py: 1.25rem;
	--px: 1.25rem;

	max-width: 33rem;
	background-color: var(--clr-neutral-2);
	border-radius: var(--br-1);
	display: flex;
	flex-direction: column;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		--py: 2rem;
		--px: 1.75rem;

		height: 100%;
		margin: 0;
	}
`;

export const CardContent = styled.div`
	flex: 1;
	background-color: var(--clr-primary-1);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 2rem;
	border-radius: var(--br-1);
	padding: var(--py) var(--px);

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		flex-direction: column;
	}
`;

export const Avatar = styled.img`
	width: 4.5rem;
	object-fit: cover;
	border: 3px solid white;
	border-radius: 50%;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		width: 5rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		width: 70%;
		margin: 0 auto;
	}
`;

export const Name = styled.p`
	font-size: var(--fs-800);
	line-height: 1.2;

	&::before {
		content: 'Report for';
		display: block;
		font-size: var(--fs-400);
		color: var(--clr-neutral-4);
		margin-bottom: 0.25rem;
	}
`;

export const CardActions = styled.div`
	padding: 0.5rem var(--px);

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		padding: 1.5rem var(--px);
	}
`;

export const StatTypeList = styled.ul`
	display: flex;
	flex-direction: row;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		flex-direction: column;
	}
`;

export const StatType = styled.li`
	--clr: ${({ isActive }) => (isActive ? 'white' : 'var(--clr-neutral-3)')};

	flex-basis: 33.33%;
	color: var(--clr);
	font-size: var(--fs-700);
	text-align: center;
	padding: 0.5rem 0;
	cursor: pointer;

	&:hover {
		color: white;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		flex-basis: 100%;
		text-align: left;
		padding: 0.35rem 0;
	}
`;
