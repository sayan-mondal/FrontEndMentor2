import { useState } from 'react';
import Theme from './Theme';
import {
	Container,
	Header,
	HeaderLeftSection,
	Logo,
	HeaderRightSection,
	Icon,
	Link,
	NavMenu,
	NavLink,
	Main,
	MainLeftSection,
	Heading1,
	Badge,
	Heading2,
	SubHeading,
	CallToAction,
	Button,
	Description,
	MainRightSection,
	ImageWrapper,
	Image,
} from './components/UiElements';
import LogoSvg from './assets/images/logo.svg';
import IconHamburger from './assets/images/icon-hamburger.svg';
import IconClose from './assets/images/icon-close.svg';
import IllustrationDevicesSvg from './assets/images/illustration-devices.svg';
import { useRef } from 'react';
import { useEffect } from 'react';

const ProjectTrackingComponent = () => {
	const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
	const navMenuRef = useRef(null);
	const navMenuIconRef = useRef(null);

	useEffect(() => {
		const onNavMenuClickAway = (e) => {
			const isClickInside =
				navMenuRef.current?.contains(e.target) ||
				navMenuIconRef.current?.contains(e.target);

			if (!isClickInside) {
				setShowMobileNavMenu(false);
			}
		};

		window.addEventListener('click', onNavMenuClickAway);

		return () => {
			window.removeEventListener('click', onNavMenuClickAway);
		};
	}, [navMenuRef, navMenuIconRef]);

	const onNavMenuIconClick = () => {
		setShowMobileNavMenu((curValue) => !curValue);
	};

	return (
		<Theme>
			<Container>
				<Header>
					<HeaderLeftSection>
						<Link href="#">
							<Logo src={LogoSvg} alt="logo" />
						</Link>
					</HeaderLeftSection>
					<HeaderRightSection>
						<Icon
							src={showMobileNavMenu ? IconClose : IconHamburger}
							alt="nav-menu-icon"
							ref={navMenuIconRef}
							onClick={onNavMenuIconClick}
						/>
						<NavMenu ref={navMenuRef} showMobileNavMenu={showMobileNavMenu}>
							<NavLink href="#">Product</NavLink>
							<NavLink href="#">Features</NavLink>
							<NavLink href="#">Pricing</NavLink>
							<hr />
							<NavLink href="#">Login</NavLink>
						</NavMenu>
					</HeaderRightSection>
				</Header>
				<Main showMobileNavMenu={showMobileNavMenu}>
					<MainLeftSection>
						<Heading1>
							<Badge>New</Badge>Monograph Dashboard
						</Heading1>
						<Heading2>Powerful insights into your team</Heading2>
						<SubHeading>
							Project planning and time tracking for agile teams
						</SubHeading>
						<CallToAction>
							<Button href="#">Schedule a demo</Button>
							<Description>to see a live preview</Description>
						</CallToAction>
					</MainLeftSection>
					<MainRightSection>
						<ImageWrapper>
							<Image src={IllustrationDevicesSvg} alt="illustration-devices" />
						</ImageWrapper>
					</MainRightSection>
				</Main>
			</Container>
		</Theme>
	);
};

export default ProjectTrackingComponent;
