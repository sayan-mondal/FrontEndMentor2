import { Logo, NavLink } from '../commonUiElements';
import {
	Container,
	ImageWrapper,
	Address,
	Wrapper,
	IconWrapper,
	Icon,
	P,
	Nav,
	List,
	ListItem,
} from './components/footerUiElements';
import IconLocation from '../../assets/images/icon-location.svg';
import IconPhone from '../../assets/images/icon-phone.svg';
import IconEmail from '../../assets/images/icon-email.svg';

const Footer = () => {
	return (
		<Container>
			<ImageWrapper>
				<Logo />
			</ImageWrapper>
			<Address>
				<Wrapper>
					<IconWrapper>
						<Icon src={IconLocation} alt="icon" />
					</IconWrapper>
					<P>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua
					</P>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon src={IconPhone} alt="icon" />
					</IconWrapper>
					<P>+1-543-123-4567</P>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon src={IconEmail} alt="icon" />
					</IconWrapper>
					<P>example@fylo.com</P>
				</Wrapper>
			</Address>
			<Nav>
				<List>
					<ListItem>
						<NavLink>About Us</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Jobs</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Press</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Blog</NavLink>
					</ListItem>
				</List>
				<List>
					<ListItem>
						<NavLink>Contact Us</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Terms</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Privacy</NavLink>
					</ListItem>
				</List>
				<List>
					<ListItem>
						<NavLink>Facebook</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Twitter</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Instagram</NavLink>
					</ListItem>
				</List>
			</Nav>
		</Container>
	);
};

export default Footer;
