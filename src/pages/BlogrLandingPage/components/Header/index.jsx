import { useRef, useEffect } from 'react';
import DropDownMenu from './components/DropDownMenu';
import { Logo, NavLink, NavSubLink } from '../commonUiElements';
import {
	Container,
	Link,
	NavMenuWrapper,
	IconWrapper,
	Icon,
	NavMenu,
	NavLinkList,
	NavLinkListItem,
	NavSubLinkList,
	NavSubLinkListItem,
	LoginNav,
	Button,
} from './components/headerUiElements';
import IconHamburger from '../../assets/images/icon-hamburger.svg';
import IconClose from '../../assets/images/icon-close.svg';

const Header = ({ isMobileNavMenuOpen, setIsMobileNavMenuOpen }) => {
	const navMenuRef = useRef(null);
	const iconRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			const eventTarget = e.target;

			if (!isMobileNavMenuOpen) return;

			if (iconRef.current?.contains(eventTarget)) return;

			if (!navMenuRef.current?.contains(eventTarget))
				setIsMobileNavMenuOpen(false);
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [iconRef, navMenuRef, isMobileNavMenuOpen, setIsMobileNavMenuOpen]);

	const handleNavIconClick = () => {
		setIsMobileNavMenuOpen((curVal) => !curVal);
	};

	return (
		<Container>
			<Link>
				<Logo />
			</Link>
			<NavMenuWrapper>
				<IconWrapper ref={iconRef} onClick={handleNavIconClick}>
					<Icon
						src={isMobileNavMenuOpen ? IconClose : IconHamburger}
						alt="nav-menu-icon"
					/>
				</IconWrapper>
				<NavMenu ref={navMenuRef} isMobileNavMenuOpen={isMobileNavMenuOpen}>
					<NavLinkList>
						<NavLinkListItem>
							<DropDownMenu title="Product">
								<NavSubLinkList>
									<NavSubLinkListItem>
										<NavSubLink>Overview</NavSubLink>
									</NavSubLinkListItem>

									<NavSubLinkListItem>
										<NavSubLink>Pricing</NavSubLink>
									</NavSubLinkListItem>

									<NavSubLinkListItem>
										<NavSubLink>Marketplace</NavSubLink>
									</NavSubLinkListItem>

									<NavSubLinkListItem>
										<NavSubLink>Features</NavSubLink>
									</NavSubLinkListItem>

									<NavSubLinkListItem>
										<NavSubLink>Integrations</NavSubLink>
									</NavSubLinkListItem>
								</NavSubLinkList>
							</DropDownMenu>
						</NavLinkListItem>
						<NavLinkListItem>
							<DropDownMenu title="Company">
								<NavSubLinkList>
									<NavSubLinkListItem>
										<NavSubLink>About</NavSubLink>
									</NavSubLinkListItem>

									<NavSubLinkListItem>
										<NavSubLink>Team</NavSubLink>
									</NavSubLinkListItem>

									<NavSubLinkListItem>
										<NavSubLink>Blog</NavSubLink>
									</NavSubLinkListItem>

									<NavSubLinkListItem>
										<NavSubLink>Careers</NavSubLink>
									</NavSubLinkListItem>
								</NavSubLinkList>
							</DropDownMenu>
						</NavLinkListItem>
						<NavLinkListItem>
							<DropDownMenu title="Connect">
								<NavSubLinkList>
									<NavSubLinkListItem>
										<NavSubLink>Contact</NavSubLink>
									</NavSubLinkListItem>
									<NavSubLinkListItem>
										<NavSubLink>Newsletter</NavSubLink>
									</NavSubLinkListItem>
									<NavSubLinkListItem>
										<NavSubLink>LinkedIn</NavSubLink>
									</NavSubLinkListItem>
								</NavSubLinkList>
							</DropDownMenu>
						</NavLinkListItem>
					</NavLinkList>
					<LoginNav>
						<NavLink>Login</NavLink>
						<Button>Sign Up</Button>
					</LoginNav>
				</NavMenu>
			</NavMenuWrapper>
		</Container>
	);
};

export default Header;
