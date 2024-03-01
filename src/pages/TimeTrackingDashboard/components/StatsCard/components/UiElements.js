import styled, { css } from 'styled-components';
import IconWork from '../../../assets/images/icon-work.svg';
import IconPlay from '../../../assets/images/icon-play.svg';
import IconStudy from '../../../assets/images/icon-study.svg';
import IconExercise from '../../../assets/images/icon-exercise.svg';
import IconSocial from '../../../assets/images/icon-social.svg';
import IconSelfCare from '../../../assets/images/icon-self-care.svg';

const getStatStyles = (type) => {
	if (type === 'Work') {
		return css`
			--clr-primary: var(--clr-primary-2);
			--icon: url(${IconWork});
		`;
	}
	if (type === 'Play') {
		return css`
			--clr-primary: var(--clr-primary-3);
			--icon: url(${IconPlay});
		`;
	}
	if (type === 'Study') {
		return css`
			--clr-primary: var(--clr-primary-4);
			--icon: url(${IconStudy});
		`;
	}
	if (type === 'Exercise') {
		return css`
			--clr-primary: var(--clr-primary-5);
			--icon: url(${IconExercise});
		`;
	}
	if (type === 'Social') {
		return css`
			--clr-primary: var(--clr-primary-6);
			--icon: url(${IconSocial});
		`;
	}
	if (type === 'Self Care') {
		return css`
			--clr-primary: var(--clr-primary-7);
			--icon: url(${IconSelfCare});
		`;
	}
};

const getStatTypesText = (type) => {
	if (type === 'daily') return 'Yesterday';
	if (type === 'weekly') return 'Last Week';
	if (type === 'monthly') return 'Last Month';
};

export const Card = styled.div`
	--pt: 2.5rem;
	--px: 5px;
	--py-body: 1.25rem;
	--px-body: 1.5rem;

	${({ title }) => getStatStyles(title)}

	background-image: linear-gradient(180deg, var(--clr-primary) 30%, var(--clr-neutral-2) 90%);
	/* background-color:var(--clr-primary); */
	position: relative;
	border-radius: var(--br-1);
	/* padding-top: var(--pt); */
	padding: var(--pt) var(--px) 0px;
	overflow: hidden;
	z-index: 1;

	&::before {
		content: var(--icon);
		position: absolute;
		top: 19%;
		right: 10%;
		z-index: -1;
		transform: translateY(-50%);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		--pt: 3rem;
		--py-body: 1.5rem;
		--px-body: 1.75rem;
	}
`;

export const Options = styled.div`
	--bg-circle: var(--clr-neutral-4);

	position: absolute;
	top: calc(var(--pt) + var(--py-body) + ((var(--fs-700) * 1.5) / 4));
	right: calc(var(--px) + var(--px-body));
	display: flex;
	gap: 0.15rem;
	padding: 0.25rem 0;
	cursor: pointer;

	&:hover {
		--bg-circle: white;
	}
`;

export const Circle = styled.div`
	--w: 0.3rem;

	width: var(--w);
	height: var(--w);
	border-radius: 50%;
	background-color: var(--bg-circle);
`;

export const CardBody = styled.div`
	background-color: var(--clr-neutral-2);
	border-radius: var(--br-1);
	padding: var(--py-body) var(--px-body);
	cursor: pointer;

	&:hover {
		background-color: var(--clr-neutral-5);
	}
`;

export const CardTitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CardTitle = styled.h3`
	font-size: var(--fs-700);
	font-weight: 500;
`;

export const CardContent = styled.div`
	margin-top: 0.75rem;
	display: flex;
	gap: 2rem;
	align-items: center;
	justify-content: space-between;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		gap: 0rem;
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const Time = styled.p`
	font-size: var(--fs-900);

	&::after {
		content: 'hrs';
	}
`;

export const PreviousTime = styled.p`
	color: var(--clr-neutral-4);

	&::before {
		content: '${({ statType }) => `${getStatTypesText(statType)} - `}';
	}

	&::after {
		content: 'hrs';
	}
`;
