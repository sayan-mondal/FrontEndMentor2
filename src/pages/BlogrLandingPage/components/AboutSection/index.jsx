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
	SectionTitle,
	SectionContent,
} from './components/aboutUiElements';
import IllustrationEditorDesktop from '../../assets/images/illustration-editor-desktop.svg';
import IllustrationEditorMobile from '../../assets/images/illustration-editor-mobile.svg';

const AboutSection = () => {
	return (
		<Section>
			<SectionTitle>Designed for the future</SectionTitle>
			<SectionContent>
				<TextImageWrapper imageRight>
					<TextWrapper>
						<TextList>
							<TextListItem>
								<TextTitle>Introducing an extensible editor</TextTitle>
								<Text>
									Blogr features an exceedingly intuitive interface which lets
									you focus on one thing: creating content. The editor supports
									management of multiple blogs and allows easy manipulation of
									embeds such as images, videos, and Markdown. Extensibility
									with plugins and themes provide easy ways to add functionality
									or change the looks of a blog.
								</Text>
							</TextListItem>
							<TextListItem>
								<TextTitle>Robust content management</TextTitle>
								<Text>
									Flexible content management enables users to easily move
									through posts. Increase the usability of your blog by adding
									customized categories, sections, format, or flow. With this
									functionality, you’re in full control.
								</Text>
							</TextListItem>
						</TextList>
					</TextWrapper>
					<ImageWrapper>
						<Picture>
							<Source
								srcSet={IllustrationEditorMobile}
								alt="illustration-editor"
							/>
							<Image
								src={IllustrationEditorDesktop}
								alt="illustration-editor"
							/>
						</Picture>
					</ImageWrapper>
				</TextImageWrapper>
			</SectionContent>
		</Section>
	);
};

export default AboutSection;
