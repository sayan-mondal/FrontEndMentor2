import { Logo } from '../commonUiElements';
import { Container, Link, Nav, Button } from './components/headerUiElements';

const Header = () => {
	return (
		<Container>
			<Link>
				<Logo />
			</Link>
			<Nav>
				<Button>Try It Free</Button>
			</Nav>
		</Container>
	);
};

export default Header;
