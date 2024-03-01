import DropDownMenu from './components/DropDownMenu';
import { Logo, NavLink } from '../CommonUiElements';
import {
	Container,
	Link,
	NavMenuWrapper,
	NavMenuIconWrapper,
	NavMenu,
	Icon,
	LoginWrapper,
	Button,
	IconWrapper,
} from './components/HeaderElements';
import IconTodo from '../../assets/images/icon-todo.svg';
import IconCalendar from '../../assets/images/icon-calendar.svg';
import IconReminders from '../../assets/images/icon-reminders.svg';
import IconPlanning from '../../assets/images/icon-planning.svg';
import IconMenu from '../../assets/images/icon-menu.svg';
import IconCloseMenu from '../../assets/images/icon-close-menu.svg';
import useFn from './hooks/useFn';

const Header = (props) => {
	const { isNavMenuOpen, setIsNavMenuOpen, setMobileNavMenuHeight } = props;
	const { navMenuRef, iconRef, handleNavMenuIconClick } = useFn({
		setIsNavMenuOpen,
		setMobileNavMenuHeight,
	});

	return (
		<Container>
			<Link href="#">
				<Logo />
			</Link>
			<NavMenuWrapper ref={navMenuRef} isNavMenuOpen={isNavMenuOpen}>
				<NavMenuIconWrapper>
					<Icon
						src={IconCloseMenu}
						alt="icon-menu"
						onClick={handleNavMenuIconClick}
					/>
				</NavMenuIconWrapper>
				<NavMenu>
					<DropDownMenu title="Features">
						<NavLink href="#">
							<Icon src={IconTodo} alt="icon-todo" />
							Todo List
						</NavLink>
						<NavLink href="#">
							<Icon src={IconCalendar} alt="icon-calendar" />
							Calendar
						</NavLink>
						<NavLink href="#">
							<Icon src={IconReminders} alt="icon-reminders" />
							Reminders
						</NavLink>
						<NavLink href="#">
							<Icon src={IconPlanning} alt="icon-planning" />
							Planning
						</NavLink>
					</DropDownMenu>
					<DropDownMenu title="Company">
						<NavLink href="#">History</NavLink>
						<NavLink href="#">Our Team</NavLink>
						<NavLink href="#">Blog</NavLink>
					</DropDownMenu>
					<NavLink href="#">Careers</NavLink>
					<NavLink href="#">About</NavLink>
				</NavMenu>
				<LoginWrapper>
					<NavLink href="#">Login</NavLink>
					<Button href="#">Register</Button>
				</LoginWrapper>
			</NavMenuWrapper>
			<IconWrapper ref={iconRef} onClick={handleNavMenuIconClick}>
				<Icon src={IconMenu} alt="icon-menu" />
			</IconWrapper>
		</Container>
	);
};

export default Header;
