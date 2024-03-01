import { Logo, NavSubLink } from '../commonUiElements';
import {
	Container,
	Link,
	NavMenu,
	NavLinkList,
	NavLinkListItem,
	Title,
	NavSubLinkList,
	NavSubLinkListItem,
} from './components/footerUiElements';

const Footer = () => {
	return (
		<Container>
			<Link>
				<Logo />
			</Link>
			<NavMenu>
				<NavLinkList>
					<NavLinkListItem>
						<Title>Product</Title>
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
					</NavLinkListItem>
					<NavLinkListItem>
						<Title>Company</Title>
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
					</NavLinkListItem>
					<NavLinkListItem>
						<Title>Connect</Title>
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
					</NavLinkListItem>
				</NavLinkList>
			</NavMenu>
		</Container>
	);
};

export default Footer;
