import { useEffect, useRef, useState } from 'react';
import {
	Container,
	TitleWrapper,
	Title,
	Icon,
	DropDownMenuWrapper,
} from './components/DropDownMenuElements';
import IconArrowDown from '../../../../assets/images/icon-arrow-down.svg';
import IconArrowUp from '../../../../assets/images/icon-arrow-up.svg';

const DropDownMenu = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const handleMouseClick = (e) => {
			const isClickInside = ref.current?.contains(e.target);

			if (!isClickInside) setIsOpen(false);
		};

		window.addEventListener('click', handleMouseClick);

		return () => {
			window.removeEventListener('click', handleMouseClick);
		};
	}, [ref]);

	const handleOnClick = () => {
		setIsOpen((curVal) => !curVal);
	};

	return (
		<Container isOpen={isOpen} ref={ref} onClick={handleOnClick}>
			<TitleWrapper>
				<Title>{title}</Title>
				<Icon src={isOpen ? IconArrowUp : IconArrowDown} />
			</TitleWrapper>
			<DropDownMenuWrapper isOpen={isOpen}>{children}</DropDownMenuWrapper>
		</Container>
	);
};

export default DropDownMenu;
