import { Button1, Button2 } from '../commonUiElements';
import {
	Section,
	Content,
	ImageWrapper,
	Image,
	HeadingWrapper,
	Heading,
	SubHeading,
	CTAWrapper,
} from './components/introUiElements';
import LogoSvg from '../../assets/images/logo.svg';

const IntroSection = () => {
	return (
		<Section>
			<Content>
				<ImageWrapper>
					<Image src={LogoSvg} alt="logo" />
				</ImageWrapper>
				<HeadingWrapper>
					<Heading>A history of everything you copy</Heading>
					<SubHeading>
						Clipboard allows you to track and organize everything you copy.
						Instantly access your clipboard on all your devices.
					</SubHeading>
				</HeadingWrapper>
				<CTAWrapper>
					<Button1>Download for iOS</Button1>
					<Button2>Download for Mac</Button2>
				</CTAWrapper>
			</Content>
		</Section>
	);
};

export default IntroSection;
