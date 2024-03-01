import { Logo } from '../commonUiElements';
import {
	Container,
	Link,
	Wrapper,
	Address,
	Div,
	IconWrapper,
	Icon,
	P,
	Nav,
	List,
	ListItem,
	A,
	Span,
} from './components/footerUiElements';
import IconLocation from '../../assets/images/icon-location.svg';
import IconPhone from '../../assets/images/icon-phone.svg';
import IconEmail from '../../assets/images/icon-email.svg';

const Footer = () => {
	return (
		<Container>
			<Link>
				<Logo />
			</Link>
			<Wrapper>
				<Address>
					<Div>
						<IconWrapper>
							<Icon src={IconLocation} alt="icon" />
						</IconWrapper>
						<P>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</P>
					</Div>
					<Div>
						<IconWrapper>
							<Icon src={IconPhone} alt="icon" />
						</IconWrapper>
						<P>+1-543-123-4567</P>
					</Div>
					<Div>
						<IconWrapper>
							<Icon src={IconEmail} alt="icon" />
						</IconWrapper>
						<P>example@huddle.com</P>
					</Div>
				</Address>
				<Nav>
					<List>
						<ListItem>
							<A>
								<Span>About Us</Span>
							</A>
						</ListItem>
						<ListItem>
							<A>
								<Span>What We Do</Span>
							</A>
						</ListItem>
						<ListItem>
							<A>
								<Span>FAQ</Span>
							</A>
						</ListItem>
					</List>
					<List>
						<ListItem>
							<A>
								<Span>Career</Span>
							</A>
						</ListItem>
						<ListItem>
							<A>
								<Span>Blog</Span>
							</A>
						</ListItem>
						<ListItem>
							<A>
								<Span>Contact Us</Span>
							</A>
						</ListItem>
					</List>
					<List>
						<ListItem>
							<A>
								<Span>Facebook</Span>
							</A>
						</ListItem>
						<ListItem>
							<A>
								<Span>Twitter</Span>
							</A>
						</ListItem>
						<ListItem>
							<A>
								<Span>Instagram</Span>
							</A>
						</ListItem>
					</List>
				</Nav>
			</Wrapper>
		</Container>
	);
};

export default Footer;
