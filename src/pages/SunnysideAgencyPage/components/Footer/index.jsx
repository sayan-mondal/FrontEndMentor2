import { NavLink } from '../CommonUiElements';
import {
	Container,
	FooterLogo,
	NavMenu,
	Col1,
	Col2,
	SocialMediaIcons,
	Link,
	Icon,
} from './UiElements';
import LogoSvg from '../../assets/images/logo.svg';
import IconFacebook from '../../assets/images/icon-facebook.svg';
import IconInstagram from '../../assets/images/icon-instagram.svg';
import IconTwitter from '../../assets/images/icon-twitter.svg';
import IconPinterest from '../../assets/images/icon-pinterest.svg';

const Footer = () => {
	return (
		<Container>
			<Link href="#intro">
				<FooterLogo src={LogoSvg} alt="logo" />
			</Link>
			<NavMenu>
				<Col1>
					<NavLink href="#about">About</NavLink>
					<NavLink href="#services">Services</NavLink>
					<NavLink href="#projects">Projects</NavLink>
				</Col1>
				<Col2>
					<NavLink href="#contact" type={2}>
						Contact
					</NavLink>
				</Col2>
			</NavMenu>
			<SocialMediaIcons>
				<Link href="#">
					<Icon src={IconFacebook} alt="icon-facebook" />
				</Link>
				<Link href="#">
					<Icon src={IconInstagram} alt="icon-instagram" />
				</Link>
				<Link href="#">
					<Icon src={IconTwitter} alt="icon-twitter" />
				</Link>
				<Link href="#">
					<Icon src={IconPinterest} alt="icon-pinterest" />
				</Link>
			</SocialMediaIcons>
		</Container>
	);
};

export default Footer;
