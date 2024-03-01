import {
	Container,
	A,
	Image,
	NavMenu,
	NavLinkList,
	NavLinkListItem,
	NavLink,
	List,
	ListItem,
	Link,
	Icon,
} from './components/footerElements';
import LogoSvg from '../../assets/images/logo.svg';
import IconFacebook from '../../assets/images/icon-facebook.svg';
import IconTwitter from '../../assets/images/icon-twitter.svg';
import IconInstagram from '../../assets/images/icon-instagram.svg';

const Footer = () => {
	return (
		<Container>
			<A>
				<Image src={LogoSvg} alt="logo" />
			</A>
			<NavMenu>
				<NavLinkList>
					<NavLinkListItem>
						<NavLink>FAQs</NavLink>
					</NavLinkListItem>
					<NavLinkListItem>
						<NavLink>Contact Us</NavLink>
					</NavLinkListItem>
					<NavLinkListItem>
						<NavLink>Privacy Policy</NavLink>
					</NavLinkListItem>
					<NavLinkListItem>
						<NavLink>Press Kit</NavLink>
					</NavLinkListItem>
					<NavLinkListItem>
						<NavLink>Install Guide</NavLink>
					</NavLinkListItem>
				</NavLinkList>
			</NavMenu>
			<List>
				<ListItem>
					<Link>
						<Icon src={IconFacebook} alt="icon" />
					</Link>
				</ListItem>
				<ListItem>
					<Link>
						<Icon src={IconTwitter} alt="icon" />
					</Link>
				</ListItem>
				<ListItem>
					<Link>
						<Icon src={IconInstagram} alt="icon" />
					</Link>
				</ListItem>
			</List>
		</Container>
	);
};

export default Footer;
