import { useEffect, useState, useRef } from 'react';
import { Logo, NavLink } from '../commonUiElements';
import {
	Container,
	Link,
	NavMenuWrapper,
	IconWrapper,
	Icon,
	NavMenu,
	NavMenuList,
	NavMenuListItem,
} from './components/uiElements';
import IconHamburger from '../../assets/images/icon-hamburger.svg';
import IconCloseMenu from '../../assets/images/icon-close-menu.svg';

const Header = ({ setShowBackdrop }) => {
	const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);
	const iconRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			if (isMobileNavMenuOpen && !iconRef?.current.contains(e.target)) {
				setIsMobileNavMenuOpen(false);
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [iconRef, isMobileNavMenuOpen]);

	useEffect(() => {
		if (isMobileNavMenuOpen) setShowBackdrop(2);
		else setShowBackdrop(null);
	}, [isMobileNavMenuOpen, setShowBackdrop]);

	const handleNavMenuIconClick = () => {
		setIsMobileNavMenuOpen((curVal) => !curVal);
	};

	return (
		<Container>
			<Link>
				<Logo />
			</Link>
			<NavMenuWrapper>
				<IconWrapper ref={iconRef} onClick={handleNavMenuIconClick}>
					<Icon
						src={isMobileNavMenuOpen ? IconCloseMenu : IconHamburger}
						alt="icon"
					/>
				</IconWrapper>
				<NavMenu isMobileNavMenuOpen={isMobileNavMenuOpen}>
					<NavMenuList>
						<NavMenuListItem>
							<NavLink>About</NavLink>
						</NavMenuListItem>
						<NavMenuListItem>
							<NavLink>Discover</NavLink>
						</NavMenuListItem>
						<NavMenuListItem>
							<NavLink>Get Started</NavLink>
						</NavMenuListItem>
					</NavMenuList>
				</NavMenu>
			</NavMenuWrapper>
		</Container>
	);
};

export default Header;
