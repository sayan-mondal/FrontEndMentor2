import styled, { css } from 'styled-components';
import IconUp from '../assets/images/icon-up.svg';
import IconDown from '../assets/images/icon-down.svg';

export const Icon = styled.img`
	object-fit: cover;
`;

export const ValueUpdate = styled.p`
	${({ type }) => {
		return type > 0
			? css`
					--clr-type: var(--clr-primary-1);
					--icon: url(${IconUp});
			  `
			: css`
					--clr-type: var(--clr-primary-2);
					--icon: url(${IconDown});
			  `;
	}};

	color: var(--clr-type);
	font-size: var(--fs-200);
	font-weight: 700;
	display: flex;
	align-items: center;

	&::before {
		content: var(--icon);
		font-size: 4px;
		margin-right: 2ch;
	}
`;
