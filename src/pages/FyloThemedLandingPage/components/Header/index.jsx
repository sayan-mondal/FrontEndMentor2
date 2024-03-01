import { Logo, NavLink } from '../commonUiElements';
import {
	Container,
	Link,
	Nav,
	List,
	ListItem,
} from './components/headerUiElements';

const Header = () => {
	return (
		<Container>
			<Link>
				<Logo />
			</Link>
			<Nav>
				<List>
					<ListItem>
						<NavLink>Features</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Team</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>Sign In</NavLink>
					</ListItem>
				</List>
			</Nav>
		</Container>
	);
};

export default Header;
