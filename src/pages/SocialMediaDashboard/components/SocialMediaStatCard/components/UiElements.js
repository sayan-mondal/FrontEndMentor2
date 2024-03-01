import styled, { css } from 'styled-components';
import { CardStyle, TextStyle1, TextStyle2 } from '../../../Theme/GlobalStyles';

export const Container = styled.div`
	${CardStyle};
`;

const CardContentStyle = css`
	display: flex;
	justify-content: space-between;
`;

export const TitleWrapper = styled.div`
	${CardContentStyle};

	align-items: center;
`;

export const StatName = styled.p`
	${TextStyle2};
`;

export const StatWrapper = styled.div`
	${CardContentStyle};

	align-items: flex-end;
`;

export const Stat = styled.p`
	${TextStyle1};
`;
