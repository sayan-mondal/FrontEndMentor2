import { Logo, NavLink } from '../commonUiElements';
import {
	Container,
	Link,
	NavMenu,
	SocialMediaIconsWrapper,
	SocialMediaIconWrapper,
	Icon,
	Copyrights,
} from './components/footerElements';
import IconFacebook from '../../assets/images/icon-facebook.svg';
import IconTwitter from '../../assets/images/icon-twitter.svg';
import IconPinterest from '../../assets/images/icon-pinterest.svg';
import IconInstagram from '../../assets/images/icon-instagram.svg';

const Footer = () => {
	return (
		<Container>
			<Link>
				<Logo />
			</Link>
			<NavMenu>
				<NavLink href="#">About</NavLink>
				<NavLink href="#">Careers</NavLink>
				<NavLink href="#">Events</NavLink>
				<NavLink href="#">Products</NavLink>
				<NavLink href="#">Support</NavLink>
			</NavMenu>
			<SocialMediaIconsWrapper>
				<SocialMediaIconWrapper>
					<Icon src={IconFacebook} alt="icon-facebook" />
				</SocialMediaIconWrapper>
				<SocialMediaIconWrapper>
					<Icon src={IconTwitter} alt="icon-twitter" />
				</SocialMediaIconWrapper>
				<SocialMediaIconWrapper>
					<Icon src={IconPinterest} alt="icon-pinterest" />
				</SocialMediaIconWrapper>
				<SocialMediaIconWrapper>
					<Icon src={IconInstagram} alt="icon-instagram" />
				</SocialMediaIconWrapper>
			</SocialMediaIconsWrapper>
			<Copyrights>© 2021 Loopstudios. All rights reserved.</Copyrights>
		</Container>
	);
};

export default Footer;
