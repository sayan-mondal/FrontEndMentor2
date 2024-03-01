import { useEffect, useState, useRef } from 'react';
import {
	Wrapper,
	TitleWrapper,
	Picture,
	Source,
	Image,
	Title,
	Nav,
} from './components/dropDownMenuUiElements';
import IconArrowLight from '../../../../assets/images/icon-arrow-light.svg';
import IconArrowDark from '../../../../assets/images/icon-arrow-dark.svg';

const DropDownMenu = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const titleWrapperRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			if (!isOpen) return;

			if (!titleWrapperRef.current?.contains(e.target)) setIsOpen(false);
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [isOpen]);

	const toggleIsOpen = () => {
		setIsOpen((curVal) => !curVal);
	};

	return (
		<Wrapper isOpen={isOpen}>
			<TitleWrapper ref={titleWrapperRef} onClick={toggleIsOpen}>
				<Title>{title}</Title>
				<Picture>
					<Source src={IconArrowDark} alt="icon-arrow" />
					<Image src={IconArrowLight} alt="icon-arrow" />
				</Picture>
			</TitleWrapper>
			<Nav>{children}</Nav>
		</Wrapper>
	);
};

export default DropDownMenu;
