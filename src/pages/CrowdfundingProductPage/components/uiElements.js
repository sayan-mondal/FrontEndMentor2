import styled, { css } from 'styled-components';
import { flowContent } from '../Theme/utilities/themeHelperFunctions';

export const Layout = styled.div`
	max-width: 90rem;
	position: relative;
`;

export const Main = styled.main`
	display: grid;
	z-index: 1;
`;

export const ImageWrapper = styled.div`
	position: relative;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(0deg, transparent, hsl(0 0% 0% / 0.75));
	}
`;

export const Picture = styled.picture`
	width: 100%;
`;

export const Source = styled.source.attrs(({ theme }) => ({
	media: `(max-width:${theme.breakpoints.sm})`,
}))`
	width: 100%;
	object-fit: cover;
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	--gap: 2rem;

	${flowContent('var(--gap)')};

	max-width: var(--mw-content);
	position: relative;
	top: -3rem;
	padding: 0 var(--p-x);
	margin: 0 auto;
`;

export const ProjectTitleSection = styled.section`
	position: relative;
	text-align: center;
	padding-top: calc(var(--p-y-section) + 1rem);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding-top: var(--p-y-section);
	}
`;

export const LogoWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Logo = styled.img`
	object-fit: cover;
`;

export const ProjectTitle = styled.h1``;

export const Subtitle = styled.p`
	font-weight: 500;
	margin-top: 0.5rem;
`;

export const ProjectCTAWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 2rem;
	}
`;

export const ProjectCTAButton = styled.button`
	--scale: 1.2;
`;

export const BookMarkWrapper = styled.div`
	--clr: var(--clr-primary-1);
	--mbm-icon: normal;

	${({ isBookmarked }) =>
		isBookmarked &&
		css`
			--clr: var(--clr-primary-2);
			--mbm-icon: screen;

			color: var(--clr);
		`};

	background-color: hsl(0 0% 95%);
	display: flex;
	align-items: center;
	gap: 1rem;
	border-radius: var(--br-2);
	cursor: pointer;

	&:hover {
		color: var(--clr);
		--mbm-icon: screen;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 2rem;
	}
`;

export const IconWrapper = styled.div`
	border-radius: 50%;
	background-color: currentColor;
`;

export const Icon = styled.img`
	width: 100%;
	object-fit: cover;
	mix-blend-mode: var(--mbm-icon);
`;

export const Text = styled.p`
	display: none;
	font-weight: 700;
	padding-right: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: block;
	}
`;

export const ProjectStatsSection = styled.section``;

export const StatsList = styled.ul`
	--column-count: 3;

	display: grid;
	grid-template-columns: auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(var(--column-count), auto);
	}
`;

export const StatsListItem = styled.li`
	--p-li: 1.75rem;
	--p-tl-li: var(--p-li);
	--p-br-li: var(--p-li);
	--m-l-li: auto;
	--m-r-li: auto;

	position: relative;
	text-align: center;

	&:nth-of-type(1) {
		--p-tl-li: 0;
	}

	:nth-last-of-type(1) {
		--p-br-li: 0;
	}

	&:not(:nth-last-of-type(1)) {
		::after {
			content: '';
			width: 50%;
			height: 2px;
			position: absolute;
			top: 100%;
			right: 25%;
			background-color: var(--clr-neutral-2);
			opacity: 0.25;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--p-li: 1.5rem;

		text-align: left;

		&:nth-of-type(1) {
			--p-tl-li: 0;
			--m-l-li: 0;
		}

		:nth-last-of-type(1) {
			--p-br-li: 0;
			--m-r-li: 0;
		}

		&:not(:nth-last-of-type(1)) {
			::after {
				width: 2px;
				height: 100%;
				top: 0;
				right: 0;
			}
		}
	}
`;

export const StatWrapper = styled.div`
	width: max-content;
	line-height: 1.2;
	padding-top: var(--p-tl-li);
	padding-bottom: var(--p-br-li);
	margin-left: var(--m-l-li);
	margin-right: var(--m-r-li);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0 var(--p-br-li) 0 var(--p-tl-li);
	}
`;

export const Stat = styled.p`
	color: var(--clr-neutral-1);
	font-size: var(--fs-900);
	font-weight: 700;
`;

export const StatDetails = styled.p`
	font-weight: 500;
	margin-top: 0.5rem;
`;

export const CustomProgressBar = styled.div`
	--value-percent: ${({ value }) => `${value * 100}%`};

	width: 100%;
	height: 0.75rem;
	position: relative;
	background-color: hsl(0 0% 95%);
	border-radius: var(--br-2);
	margin-top: 2.5rem;

	&::after {
		content: '';
		width: var(--value-percent);
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		background-color: var(--clr-primary-1);
		border-radius: var(--br-2);
	}
`;

export const ProjectDetailsSection = styled.section``;

export const AboutWrapper = styled.div``;

export const AboutTitle = styled.h2`
	font-size: var(--fs-700);
`;

export const About = styled.p`
	line-height: 1.75;
	margin-top: 1rem;
`;

export const PledgeList = styled.ul`
	--gap: 1.5rem;
	${flowContent('var(--gap)')}

	margin-top: 2rem;
`;

export const PledgeWrapper = styled.li`
	--p-y-li: 1.5rem;
	--p-x-li: 1.5rem;
	--gap: 1.15rem;
	--clr: hsl(0 0% 85%);

	${({ disabled }) => {
		if (disabled === undefined || !disabled) {
			return css`
				--o: 1;
			`;
		}

		return css`
			--o: 0.5;

			button {
				background-color: var(--clr-neutral-2);
				pointer-events: none;
			}
		`;
	}};

	${flowContent('var(--gap)')};

	border: 1px solid var(--clr);
	border-radius: var(--br-1);
	opacity: var(--o);
	padding: var(--p-y-li) var(--p-x-li);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--p-y-li: 2rem;
		--p-x-li: 2rem;
		--gap: 1.5rem;
	}
`;

export const PledgeHeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: normal;
	gap: 0.15rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		--p-y-li: 2rem;
		--p-x-li: 2rem;

		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
	}
`;

export const PledgeReward = styled.h3`
	font-size: var(--fs-600);
`;

export const PledgeDetail1 = styled.p`
	color: var(--clr-primary-1);
	font-weight: 500;
`;

export const PledgeDetail2 = styled.p``;

export const PledgeCTAWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: calc(var(--gap) + 0.5rem);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
	}
`;

export const PledgeCTADetail = styled.p`
	display: flex;
	align-items: flex-end;
	font-weight: 500;
	line-height: 1.2;

	b {
		font-size: var(--fs-800);
		color: var(--clr-neutral-1);
		margin-right: 0.5rem;
		line-height: 1;
	}
`;

export const PledgeCTAButton = styled.button`
	font-size: var(--fs-300);
	margin: 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 0;
	}
`;

export const Modal = styled.div`
	display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
	max-width: var(--mw-content);
	width: 100%;
	position: absolute;
	top: var(--h-header);
	left: 50%;
	z-index: 3;
	transform: translateX(-50%);
	margin: 0 var(--p-x);
`;

export const ModalWrapper = styled.section`
	--p-y-mw: 1.5rem;
	--p-x-mw: 1.5rem;
	--h-modalheader: 1rem;

	padding: var(--p-y-mw) var(--p-x-mw);
`;

export const ModalHeader = styled.div`
	height: var(--h-modalheader);
`;

export const ModalIconWrapper = styled.div`
	width: max-content;
	margin-left: auto;
	cursor: pointer;
`;

export const ModalIcon = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const ModalContent = styled.div`
	--p-y: calc(var(--p-y-section) - var(--p-y-mw));
	--p-x: calc(var(--p-x-section) - var(--p-x-mw));
	--p-t: calc(var(--p-y) - var(--h-modalheader));

	padding: var(--p-t) var(--p-x) var(--p-y);
`;

export const ModalContentTitleWrapper = styled.div``;

export const ModalContentTitle = styled.h2``;

export const ModalContentSubtitle = styled.p`
	font-weight: 500;
	margin-top: 0.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 0.25rem;
	}
`;

export const ModalPledgeList = styled(PledgeList)``;

export const ModalPledgeListItem = styled.li``;

export const ModalPledgeWrapper = styled(PledgeWrapper).attrs({
	as: 'label',
})`
	--gap: 0;
	${flowContent('var(--gap)')};

	display: block;
	outline: 1px solid var(--clr);
	border: 0;
	padding: 0;

	${({ checked }) =>
		checked
			? css`
					--d-form: grid;

					outline: 2px solid var(--clr-primary-2);

					&::after {
						content: '';
						height: 1px;
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						background-color: var(--clr);
					}
			  `
			: css`
					--d-form: none;
			  `};

	${({ disabled }) => {
		if (disabled === undefined || !disabled) {
			return css`
				--pe: all;

				cursor: pointer;

				&:hover {
					h4 {
						color: var(--clr-primary-2);
					}
				}
			`;
		}

		return css`
			--pe: none;

			cursor: auto;

			input[type='radio'] {
				pointer-events: none;
			}
		`;
	}};
`;

export const ModalPledgeDetailsWrapper = styled.div`
	--row-gap: 1.25rem;
	--column-gap: 1.5rem;
	--p-y: var(--p-y-li);
	--p-x: var(--p-x-li);
	--h-radioinput: 1.5rem;

	display: grid;
	grid-template-columns: var(--h-radioinput) 1fr;
	grid-template-areas:
		'radioinput pledgeheader'
		'pledgedetail2 pledgedetail2'
		'pledgectadetail pledgectadetail';
	gap: var(--row-gap) var(--column-gap);
	line-height: 1;
	position: relative;
	padding: var(--p-y) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: auto 1fr auto;
		grid-template-areas:
			'radioinput pledgeheader  pledgectadetail'
			'. pledgedetail2 pledgedetail2';
		--row-gap: 1rem;
	}
`;

export const RadioInput = styled.input.attrs({
	type: 'radio',
})`
	grid-area: radioinput;
	appearance: none;
	width: var(--h-radioinput);
	height: var(--h-radioinput);
	border-radius: 50%;
	border: 1px solid var(--clr);
	padding: 0.3rem;
	cursor: pointer;

	&:checked {
		background: var(--clr-primary-1);
		background-clip: content-box;
	}
`;

export const ModalPledgeHeader = styled.div`
	grid-area: pledgeheader;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		align-items: center;
		gap: var(--column-gap);
	}
`;

export const ModalPledgeReward = styled(PledgeReward).attrs({
	as: 'h4',
})``;

export const ModalPledgeDetail1 = styled(PledgeDetail1)``;

export const ModalPledgeDetail2 = styled(PledgeDetail2)`
	grid-area: pledgedetail2;
	line-height: 1.5;
`;

export const ModalPledgeCTADetail = styled(PledgeCTADetail)`
	grid-area: pledgectadetail;
	line-height: 1;
	align-self: center;

	b {
		font-size: var(--fs-600);
	}
`;

export const ModalPledgeForm = styled.form`
	--p-y: var(--p-y-li);
	--p-x: var(--p-x-li);
	--br-forminputs: 0.25rem;

	display: var(--d-form);
	/* grid-template-columns: 1fr 1fr; */
	grid-template-columns: auto;
	gap: 1rem;
	/* grid-template-areas: 'pledgeinput pledgeinput' 'amountinput button'; */
	grid-template-areas: 'pledgeinput ' 'amountinput' 'button';
	padding: var(--p-y) var(--p-x);

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
		/* grid-template-columns: 1fr auto; */
		gap: 1rem 1.5rem;
		grid-template-areas: 'pledgeinput pledgeinput' 'amountinput button';
		/* grid-template-areas: 'pledgeinput amountinput' 'pledgeinput button'; */
	}
`;

export const PledgeInput = styled.input.attrs({
	as: 'textarea',
	placeholder: 'Enter your pledge',
})`
	grid-area: pledgeinput;
	width: 100%;
	height: 100%;
	border: 1px solid var(--clr);
	border-radius: var(--br-forminputs);
	resize: none;
	padding: 0.5rem 0.75rem;

	&:focus-within {
		border: 1px solid var(--clr-primary-2);
		outline: 0;
	}
`;

export const AmountInputWrapper = styled.div`
	--p-y: 0.75rem;
	--p-x: 1.25rem;
	--d-b: ${({ showBefore }) => (showBefore ? 'inline' : 'none')};

	grid-area: amountinput;
	width: max-content;
	background-color: white;
	border: 1px solid var(--clr);
	border-radius: var(--br-forminputs);
	padding: var(--p-y) var(--p-x);

	&::before {
		display: var(--d-b);
		content: '$';
		font-weight: 500;
		margin-right: 1ch;
	}

	&:focus-within {
		border: 1px solid var(--clr-primary-2);
	}
`;

export const AmountInput = styled.input.attrs({
	type: 'number',
	min: 0,
	placeholder: 'Enter your amount',
})`
	width: 8.5rem;
	background-color: transparent;
	-moz-appearance: textfield;

	&::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}

	&:not(:placeholder-shown) ${AmountInputWrapper} {
		--d-b: inline;
	}
`;

export const FormButton = styled.button.attrs({ type: 'submit' })`
	grid-area: button;
	width: 100%;
	max-width: 15rem;
	justify-self: center;
	margin-top: 0.5rem;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		justify-self: right;
		margin-top: 0;
	}
`;

export const ModalFormSubmittedWrapper = styled.div`
	text-align: center;

	${ModalIconWrapper} {
		margin: 0 auto;
		cursor: auto;
	}
`;

export const ModalFormSubmittedTitle = styled.h2`
	margin-top: 1.5rem;
`;

export const ModalFormSubmittedSubtitle = styled.p`
	margin-top: 0.75rem;
`;

export const ModalFormSubmittedButton = styled.button.attrs({
	type: 'button',
})`
	margin: 2rem auto 0;
`;
