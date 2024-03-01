import {
	Container,
	Image,
	Content,
	Heading,
	IconWrapper,
	Icon,
} from './UiElements';
import ImageHeader from '../../assets/images/desktop/image-header.jpg';
import IconArrowDown from '../../assets/images/icon-arrow-down.svg';

const Intro = () => {
	return (
		<Container>
			<Image src={ImageHeader} alt="image" />
			<Content>
				<Heading>We are creatives</Heading>
				<IconWrapper>
					<Icon src={IconArrowDown} alt="icon-arrow-down" />
				</IconWrapper>
			</Content>
		</Container>
	);
};

export default Intro;
