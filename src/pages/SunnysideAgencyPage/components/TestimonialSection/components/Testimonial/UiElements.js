import styled from 'styled-components';
import { flowContent } from '../../../../Theme/Utilities/themeHelperFunctions';

export const Container = styled.div`
	--gap: 2rem;

	${flowContent('var(--gap)')};

	max-width: 35ch;
	text-align: center;
	padding: 2rem 1rem;
	margin: 0 auto;
`;

export const AvatarWrapper = styled.div`
	width: 5rem;
	border-radius: 50%;
	overflow: hidden;
	margin: 0 auto;
`;

export const Avatar = styled.img`
	object-fit: cover;
`;

export const TestimonialContent = styled.p`
	color: var(--clr-neutral-2);

	&::before {
		content: open-quote;
		margin-right: 0.5ch;
	}

	&::after {
		content: close-quote;
		margin-left: 0.5ch;
	}
`;

export const UserWrapper = styled.div``;

export const Name = styled.p`
	font-family: var(--ff-2);
	font-weight: 900;
`;

export const Designation = styled.p`
	color: var(--clr-neutral-3);
	font-size: var(--fs-200);
	margin-top: 0.25rem;
`;
