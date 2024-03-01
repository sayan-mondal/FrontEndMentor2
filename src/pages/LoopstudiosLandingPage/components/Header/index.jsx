import { Logo, NavLink } from '../commonUiElements';
import {
	Container,
	Link,
	NavMenuWrapper,
	MobileNavMenuHeader,
	IconWrapper,
	Icon,
	NavMenu,
} from './components/headerElements';
import IconHamburger from '../../assets/images/icon-hamburger.svg';
import IconClose from '../../assets/images/icon-close.svg';

const Header = ({ isMobileNavMenuOpen, toggleIsMobileNavMenuOpen }) => {
	return (
		<Container>
			<Link href="#">
				<Logo />
			</Link>
			<IconWrapper>
				<Icon
					src={IconHamburger}
					alt="icon-hamburger"
					onClick={toggleIsMobileNavMenuOpen}
				/>
			</IconWrapper>
			<NavMenuWrapper isMobileNavMenuOpen={isMobileNavMenuOpen}>
				<MobileNavMenuHeader>
					<Link href="#">
						<Logo />
					</Link>
					<Icon
						src={IconClose}
						alt="icon-close"
						onClick={toggleIsMobileNavMenuOpen}
					/>
				</MobileNavMenuHeader>
				<NavMenu>
					<NavLink href="#">About</NavLink>
					<NavLink href="#">Careers</NavLink>
					<NavLink href="#">Events</NavLink>
					<NavLink href="#">Products</NavLink>
					<NavLink href="#">Support</NavLink>
				</NavMenu>
			</NavMenuWrapper>
		</Container>
	);
};

export default Header;
