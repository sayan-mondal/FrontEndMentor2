import { Logo, NavLink } from '../CommonUiElements';
import {
	HeaderContainer,
	Link,
	HeaderRightSection,
	MobileNavMenuIcon,
	Icon,
	NavMenu,
} from './UiElements';
import LogoSvg from '../../assets/images/logo.svg';
import IconHamburger from '../../assets/images/icon-hamburger.svg';
import { useState } from 'react';

const Header = () => {
	const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

	const onNavMenuIconClick = () => {
		setShowMobileNavMenu((curVal) => !curVal);
	};

	return (
		<HeaderContainer>
			<Link href="#intro">
				<Logo src={LogoSvg} alt="logo" />
			</Link>
			<HeaderRightSection>
				<MobileNavMenuIcon>
					<Icon
						src={IconHamburger}
						alt="icon-hamburger"
						onClick={onNavMenuIconClick}
					/>
				</MobileNavMenuIcon>
				<NavMenu showMobileNavMenu={showMobileNavMenu}>
					<NavLink href="#about">About</NavLink>
					<NavLink href="#services">Services</NavLink>
					<NavLink href="#projects">Projects</NavLink>
					<NavLink href="#contact" type={2}>
						Contact
					</NavLink>
				</NavMenu>
			</HeaderRightSection>
		</HeaderContainer>
	);
};

export default Header;
