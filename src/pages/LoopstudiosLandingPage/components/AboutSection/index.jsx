import {
	Section,
	Content,
	Picture,
	Source,
	Image,
	TextContent,
	Title,
	Subtitle,
} from './components/aboutSectionElements';
import ImageInteractiveDesktop from '../../assets/images/desktop/image-interactive.jpg';
import ImageInteractiveMobile from '../../assets/images/mobile/image-interactive.jpg';

const AboutSection = () => {
	return (
		<Section>
			<Content>
				<Picture>
					<Source
						srcSet={ImageInteractiveMobile}
						alt="image-interactive-mobile"
					/>
					<Image
						src={ImageInteractiveDesktop}
						alt="image-interactive-desktop"
					/>
				</Picture>
				<TextContent>
					<Title>The leader in interactive VR</Title>
					<Subtitle>
						Founded in 2011, Loopstudios has been producing world-class virtual
						reality projects for some of the best companies around the globe.
						Our award-winning creations have transformed businesses through
						digital experiences that bind to their brand.
					</Subtitle>
				</TextContent>
			</Content>
		</Section>
	);
};

export default AboutSection;
