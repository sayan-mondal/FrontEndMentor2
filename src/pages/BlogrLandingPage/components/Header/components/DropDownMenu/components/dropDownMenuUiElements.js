import styled, { css } from 'styled-components';
import { NavLink } from '../../../../commonUiElements';

const css1 = css`
	--t-icon: rotate(-180deg);
	--t-nav: scale(1);
	--d-nav: block;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--t-nav: translateX(-50%) scale(1);
	}
`;

const css2 = css`
	--t-icon: none;
	--t-nav: scale(0);
	--d-nav: none;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		--t-nav: translateX(-50%) scale(0);
		--d-nav: block;
	}
`;

export const Wrapper = styled.div`
	${({ isOpen }) => (isOpen ? css1 : css2)};
	position: relative;
`;

export const TitleWrapper = styled(NavLink).attrs({
	as: 'div',
})`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 0 var(--p-x-a);
	cursor: pointer;
`;

export const Title = styled.p`
	position: relative;
	padding: var(--p-y-a) 0;

	&:after {
		content: '';
		height: 2px;
		position: absolute;
		top: calc(100% - var(--p-y-a));
		left: 0;
		right: 0;
		background-color: currentColor;
		transform: scale(0);
		transition: transform 150ms ease-in-out;
	}

	${TitleWrapper}:hover & {
		&:after {
			transform: scale(1);
		}
	}
`;

export const Picture = styled.picture`
	object-fit: cover;
	transform: var(--t-icon);
	transition: transform 150ms ease-in-out;
	padding: var(--p-y-a) 0;
`;

// export const Source = styled.source.attrs(({ theme }) => ({
// 	media: `(max-width:${theme.breakpoints.md})`,
// }))`
// 	object-fit: cover;
// `;

export const Source = styled.img`
	display: block;
	object-fit: cover;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const Image = styled.img`
	display: none;
	object-fit: cover;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: block;
	}
`;

export const Nav = styled.div`
	display: var(--d-nav);
	background-color: var(--clr);
	color: black;
	position: relative;
	transform: var(--t-nav);
	transform-origin: 50% 0%;
	transition: transform 150ms ease-in-out;
	border-radius: var(--br-1);
	padding: var(--p-y-a) 0;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		background-color: var(--clr-neutral-1);
		position: absolute;
		top: 100%;
		left: 50%;
	}
`;
