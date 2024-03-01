import {
	Image,
	ImageWrapper,
	Picture,
	Source,
	Text,
	TextImageWrapper,
	TextList,
	TextListItem,
	TextTitle,
	TextWrapper,
} from '../commonUiElements';
import {
	Section,
	Heading,
	HeadingImageWrapper,
	HeadingImage,
	TitleWrapper,
	Title,
	SubTitle,
	SectionContent,
} from './components/featureUiElements';
import IllustrationPhones from '../../assets/images/illustration-phones.svg';
import IllustrationLaptopDesktop from '../../assets/images/illustration-laptop-desktop.svg';
import IllustrationLaptopMobile from '../../assets/images/illustration-laptop-mobile.svg';

const FeaturesSection = () => {
	return (
		<Section>
			<Heading>
				<HeadingImageWrapper>
					<HeadingImage src={IllustrationPhones} alt="illustration-phones" />
				</HeadingImageWrapper>
				<TitleWrapper>
					<Title>State of the Art Infrastructure</Title>
					<SubTitle>
						With reliability and speed in mind, worldwide data centers provide
						the backbone for ultra-fast connectivity. This ensures your site
						will load instantly, no matter where your readers are, keeping your
						site competitive.
					</SubTitle>
				</TitleWrapper>
			</Heading>
			<SectionContent>
				<TextImageWrapper imageRight={false}>
					<TextWrapper>
						<TextList>
							<TextListItem>
								<TextTitle>Free, open, simple</TextTitle>
								<Text>
									Blogr is a free and open source application backed by a large
									community of helpful developers. It supports features such as
									code syntax highlighting, RSS feeds, social media integration,
									third-party commenting tools, and works seamlessly with Google
									Analytics. The architecture is clean and is relatively easy to
									learn.
								</Text>
							</TextListItem>
							<TextListItem>
								<TextTitle>Powerful tooling</TextTitle>
								<Text>
									Batteries included. We built a simple and straightforward CLI
									tool that makes customization and deployment a breeze, but
									capable of producing even the most complicated sites.
								</Text>
							</TextListItem>
						</TextList>
					</TextWrapper>
					<ImageWrapper>
						<Picture>
							<Source
								srcSet={IllustrationLaptopMobile}
								alt="illustration-laptop"
							/>
							<Image
								src={IllustrationLaptopDesktop}
								alt="illustration-laptop"
							/>
						</Picture>
					</ImageWrapper>
				</TextImageWrapper>
			</SectionContent>
		</Section>
	);
};

export default FeaturesSection;
