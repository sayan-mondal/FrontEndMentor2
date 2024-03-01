import styled from 'styled-components';

export const Button1 = styled.button`
	--clr: var(--clr-primary-1);

	background-color: var(--clr);
	color: white;
	filter: drop-shadow(0px 3px 5px var(--clr));

	&:hover {
		opacity: 0.8;
	}
`;

export const Button2 = styled.button`
	--clr: var(--clr-primary-2);

	background-color: var(--clr);
	color: white;
	filter: drop-shadow(0px 3px 5px var(--clr));

	&:hover {
		opacity: 0.8;
	}
`;
