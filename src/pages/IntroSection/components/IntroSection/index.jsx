import {
	Container,
	TextSection,
	TextWrapper,
	Heading,
	SubHeading,
	Button,
	ImageSection,
	Picture,
	Source,
	Image,
	GallerySection,
	GalleryImagesWrapper,
	GalleryImageWrapper,
	GalleryImage,
} from './components/IntroElements';
import ClientDatabiz from '../../assets/images/client-databiz.svg';
import ClientAudiophile from '../../assets/images/client-audiophile.svg';
import ClientMeet from '../../assets/images/client-meet.svg';
import ClientMaker from '../../assets/images/client-maker.svg';
import ImageHeroDesktop from '../../assets/images/image-hero-desktop.png';
import ImageHeroMobile from '../../assets/images/image-hero-mobile.png';
import { useTheme } from 'styled-components';

const IntroSection = () => {
	const theme = useTheme();

	return (
		<Container>
			<TextSection>
				<TextWrapper>
					<Heading>Make remote work</Heading>
					<SubHeading>
						Get your team in sync, no matter your location. Streamline
						processes, create team rituals, and watch productivity soar.
					</SubHeading>
					<Button>Learn more</Button>
				</TextWrapper>
			</TextSection>
			<ImageSection>
				<Picture>
					<Source
						media={`(max-width: ${theme.breakpoints.sm})`}
						srcSet={ImageHeroMobile}
						alt="image"
					/>
					<Image src={ImageHeroDesktop} alt="image" />
				</Picture>
			</ImageSection>
			<GallerySection>
				<GalleryImagesWrapper>
					<GalleryImageWrapper>
						<GalleryImage src={ClientDatabiz} alt="client-databiz" />
					</GalleryImageWrapper>
					<GalleryImageWrapper>
						<GalleryImage src={ClientAudiophile} alt="client-audiophile" />
					</GalleryImageWrapper>
					<GalleryImageWrapper>
						<GalleryImage src={ClientMeet} alt="client-meet" />
					</GalleryImageWrapper>
					<GalleryImageWrapper>
						<GalleryImage src={ClientMaker} alt="client-maker" />
					</GalleryImageWrapper>
				</GalleryImagesWrapper>
			</GallerySection>
		</Container>
	);
};

export default IntroSection;
