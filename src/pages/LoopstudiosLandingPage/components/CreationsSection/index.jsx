import {
	Section,
	Title,
	Button,
	Content,
	Card,
	Picture,
	Source,
	Image,
	CardTitleWrapper,
	CardTitle,
} from './components/creationSectionElements';
import ImageDeepEarthDesktop from '../../assets/images/desktop/image-deep-earth.jpg';
import ImageDeepEarthMobile from '../../assets/images/mobile/image-deep-earth.jpg';
import ImageNightArcadeDesktop from '../../assets/images/desktop/image-night-arcade.jpg';
import ImageNightArcadeMobile from '../../assets/images/mobile/image-night-arcade.jpg';
import ImageSoccerTeamDesktop from '../../assets/images/desktop/image-soccer-team.jpg';
import ImageSoccerTeamMobile from '../../assets/images/mobile/image-soccer-team.jpg';
import ImageGridDesktop from '../../assets/images/desktop/image-grid.jpg';
import ImageGridMobile from '../../assets/images/mobile/image-grid.jpg';
import ImageFromAboveDesktop from '../../assets/images/desktop/image-from-above.jpg';
import ImageFromAboveMobile from '../../assets/images/mobile/image-from-above.jpg';
import ImagePocketBorealisDesktop from '../../assets/images/desktop/image-pocket-borealis.jpg';
import ImagePocketBorealisMobile from '../../assets/images/mobile/image-pocket-borealis.jpg';
import ImageCuriosityDesktop from '../../assets/images/desktop/image-curiosity.jpg';
import ImageCuriosityMobile from '../../assets/images/mobile/image-curiosity.jpg';
import ImageFisheyeDesktop from '../../assets/images/desktop/image-fisheye.jpg';
import ImageFisheyeMobile from '../../assets/images/mobile/image-fisheye.jpg';

const CreationsSection = () => {
	return (
		<Section>
			<Title>Our creations</Title>
			<Button>See all</Button>
			<Content>
				<Card>
					<Picture>
						<Source srcSet={ImageDeepEarthMobile} />
						<Image src={ImageDeepEarthDesktop} />
					</Picture>
					<CardTitleWrapper>
						<CardTitle>Deep earth</CardTitle>
					</CardTitleWrapper>
				</Card>
				<Card>
					<Picture>
						<Source srcSet={ImageNightArcadeMobile} />
						<Image src={ImageNightArcadeDesktop} />
					</Picture>
					<CardTitleWrapper>
						<CardTitle>Night arcade</CardTitle>
					</CardTitleWrapper>
				</Card>
				<Card>
					<Picture>
						<Source srcSet={ImageSoccerTeamMobile} />
						<Image src={ImageSoccerTeamDesktop} />
					</Picture>
					<CardTitleWrapper>
						<CardTitle>Soccer team VR</CardTitle>
					</CardTitleWrapper>
				</Card>
				<Card>
					<Picture>
						<Source srcSet={ImageGridMobile} />
						<Image src={ImageGridDesktop} />
					</Picture>
					<CardTitleWrapper>
						<CardTitle>The grid</CardTitle>
					</CardTitleWrapper>
				</Card>
				<Card>
					<Picture>
						<Source srcSet={ImageFromAboveMobile} />
						<Image src={ImageFromAboveDesktop} />
					</Picture>
					<CardTitleWrapper>
						<CardTitle>From up above VR</CardTitle>
					</CardTitleWrapper>
				</Card>
				<Card>
					<Picture>
						<Source srcSet={ImagePocketBorealisMobile} />
						<Image src={ImagePocketBorealisDesktop} />
					</Picture>
					<CardTitleWrapper>
						<CardTitle>Pocket borealis</CardTitle>
					</CardTitleWrapper>
				</Card>
				<Card>
					<Picture>
						<Source srcSet={ImageCuriosityMobile} />
						<Image src={ImageCuriosityDesktop} />
					</Picture>
					<CardTitleWrapper>
						<CardTitle>The curiosity</CardTitle>
					</CardTitleWrapper>
				</Card>
				<Card>
					<Picture>
						<Source srcSet={ImageFisheyeMobile} />
						<Image src={ImageFisheyeDesktop} />
					</Picture>
					<CardTitleWrapper>
						<CardTitle>Make it fisheye</CardTitle>
					</CardTitleWrapper>
				</Card>
			</Content>
		</Section>
	);
};

export default CreationsSection;
