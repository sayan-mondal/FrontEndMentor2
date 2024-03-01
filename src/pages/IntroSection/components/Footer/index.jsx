import { Logo, NavLink } from '../CommonUiElements';
import { Container, Link, NavMenu } from './components/FooterElements';

const Footer = () => {
	return (
		<Container>
			<Link href="#">
				<Logo />
			</Link>
			<NavMenu>
				<NavLink href="#">Features</NavLink>
				<NavLink href="#">Company</NavLink>
				<NavLink href="#">Careers</NavLink>
				<NavLink href="#">About</NavLink>
			</NavMenu>
		</Container>
	);
};

export default Footer;
