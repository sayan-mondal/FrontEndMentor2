import styled, { css } from 'styled-components';
import { flowContent } from '../theme/themeHelperFunctions';

export const Layout = styled.div`
	max-width: 90rem;
	margin: 0 auto;
`;

export const Main = styled.main`
	--p-y-main: 0;

	padding: var(--p-y-main) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--p-y-main: 3rem;

		margin-top: 1rem;
	}
`;

export const H2 = styled.h2``;

export const P = styled.p``;

export const Button = styled.button``;

export const A = styled.a`
	display: inline;
`;

export const Strong = styled.strong``;

export const Span = styled.span``;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const Wrapper = styled.div``;

export const NotificationsWrapper = styled.section`
	max-width: 50rem;
	background-color: var(--clr-neutral-1);
	color: var(--clr-neutral-6);

	padding: 1.5rem 1rem;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		border-radius: var(--br-2);
		box-shadow: 0px 3px 15px hsl(0 0% 0% / 0.1);
		padding: 2rem;
	}
`;

export const HeadingWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	${Button} {
		background-color: transparent;
		color: var(--clr-neutral-7);
		font-size: 1.05em;
		padding: 0.25rem 0;

		&:hover {
			color: var(--clr-primary-2);
			transform: scale(1.02);
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 3rem;
	}
`;

export const Title = styled.div`
	--d-count: ${({ showCount }) => (showCount ? 'inline-block' : 'none')};

	display: flex;
	align-items: center;
	gap: 0.75rem;

	${Strong} {
		display: var(--d-count);
		background-color: var(--clr-primary-2);
		color: var(--clr-neutral-1);
		font-size: 1.2em;
		border-radius: 5px;
		padding: 0 0.5rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 1rem;

		${Strong} {
			padding: 0.1rem 0.75rem;
		}
	}
`;

export const NotificationList = styled.ul`
	--gap: 1rem;

	${flowContent('var(--gap)')};

	margin-top: 1.5rem;
`;

export const NotificationListItem = styled.li`
	${({ isRead }) => {
		if (isRead === undefined || isRead === null || isRead)
			return css`
				--d-icon: none;
				background-color: hsl(210, 60%, 97%);

				&:hover {
					background-color: hsl(210, 60%, 95%);
				}
			`;

		return css`
			--d-icon: inline-block;
			background-color: hsl(211, 68%, 92%);

			&:hover {
				background-color: hsl(211, 68%, 90%);
			}
		`;
	}}

	display: flex;
	gap: 0.75rem;
	border-radius: var(--br-1);
	padding: 1rem 0.75rem;
	cursor: pointer;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 1rem;
		padding: 1rem 1.25rem;
	}
`;

export const AvatarWrapper = styled.div`
	max-width: 2rem;
	height: max-content;
	border-radius: 50%;
	overflow: hidden;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		max-width: 3rem;
	}
`;

export const NotificationWrapper = styled.div`
	--gap: 1rem;

	${flowContent('var(--gap)')};

	width: 100%;
`;

export const Circle = css`
	width: var(--diameter, 1rem);
	height: var(--diameter, 1rem);
	border-radius: 50%;
`;

export const Notification = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1.25rem;

	${Wrapper} {
		--gap: 0.25rem;
		--m-x-a: 0.5ch;

		${flowContent('var(--gap)')}

		${P} {
			--p-lh: 1.25;

			line-height: var(--p-lh);

			${A} {
				&:first-of-type {
					color: var(--clr-neutral-7);
					margin-right: var(--m-x-a);
				}

				&:not(:first-of-type) {
					color: hsl(214 61% 54%);
					margin-left: var(--m-x-a);
				}

				&:hover {
					color: var(--clr-primary-2);
				}
			}

			&:nth-of-type(2) {
				color: var(--clr-neutral-5);
			}
		}

		${Span} {
			display: var(--d-icon);
			color: var(--clr-primary-1);
			font-size: 1.1em;
			margin-left: 0.5rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		${Wrapper} {
			--m-x-a: 0.7ch;

			${Span} {
				--diameter: 0.5rem;
			}
		}
	}
`;

export const Content = styled.div`
	background-color: var(--clr-neutral-2);
	border-radius: var(--br-1);
	border: 1px solid var(--clr-neutral-4);
	padding: 0.5rem 0.75rem;

	&:hover {
		background-color: var(--clr-neutral-3);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.75rem 1rem;
	}
`;

export const InlineContent = styled.div`
	margin-left: auto;

	${ImageWrapper} {
		max-width: 3rem;
		min-width: 2.5rem;
	}
`;
