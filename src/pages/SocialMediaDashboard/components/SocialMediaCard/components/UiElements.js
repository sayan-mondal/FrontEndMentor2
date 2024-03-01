import styled from 'styled-components';
import { CardStyle, TextStyle1, TextStyle2 } from '../../../Theme/GlobalStyles';

export const Container = styled.div`
	--clr-platform: ${({ platformColor }) => platformColor};

	${CardStyle};

	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding-top: calc(var(--p-card-y) + var(--br-1));
	overflow: hidden;

	&::before {
		content: '';
		width: 100%;
		height: var(--br-1);
		position: absolute;
		top: 0;
		left: 0;
		background: var(--clr-platform);
	}
`;

export const UserNameWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const UserName = styled.a`
	${TextStyle2};

	font-size: var(--fs-300);
`;

export const StatWrapper = styled.div``;

export const Stat = styled.p`
	${TextStyle1};

	font-size: var(--fs-900);
	text-align: center;
`;

export const StatName = styled.p`
	${TextStyle2};

	font-weight: 400;
	text-transform: uppercase;
	text-align: center;
	letter-spacing: 3px;

	margin-top: 0.4rem;
`;
