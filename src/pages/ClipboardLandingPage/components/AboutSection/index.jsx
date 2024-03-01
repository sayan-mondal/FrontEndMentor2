import { Button1, Button2 } from '../commonUiElements';
import {
	Section,
	SubSectionWrapper,
	SubSectionTitleWrapper,
	SubSectionTitle,
	SubSectionSubTitle,
	SubSectionContent1,
	ImageWrapper,
	Image,
	List,
	ListItem,
	H3,
	P,
	IconWrapper,
	Icon,
	SubSectionContent2,
	SubSectionContent3,
	SubSectionContent4,
	SubSectionContent5,
} from './components/aboutUiElements';
import ImageComputer from '../../assets/images/image-computer.png';
import ImageDevices from '../../assets/images/image-devices.png';
import IconBlacklist from '../../assets/images/icon-blacklist.svg';
import IconText from '../../assets/images/icon-text.svg';
import IconPreview from '../../assets/images/icon-preview.svg';
import LogoGoogle from '../../assets/images/logo-google.png';
import LogoIbm from '../../assets/images/logo-ibm.png';
import LogoMicrosoft from '../../assets/images/logo-microsoft.png';
import LogoHp from '../../assets/images/logo-hp.png';
import LogoVectorGraphics from '../../assets/images/logo-vector-graphics.png';

const AboutSection = () => {
	return (
		<Section>
			<SubSectionWrapper>
				<SubSectionTitleWrapper>
					<SubSectionTitle>Keep track of your snippets</SubSectionTitle>
					<SubSectionSubTitle>
						Clipboard instantly stores any item you copy in the cloud, meaning
						you can access your snippets immediately on all your devices. Our
						Mac and iOS apps will help you organize everything.
					</SubSectionSubTitle>
				</SubSectionTitleWrapper>
				<SubSectionContent1>
					<ImageWrapper>
						<Image src={ImageComputer} alt="image" />
					</ImageWrapper>
					<List>
						<ListItem>
							<H3>Quick Search</H3>
							<P>
								Easily search your snippets by content, category, web address,
								application, and more.
							</P>
						</ListItem>
						<ListItem>
							<H3>iCloud Sync</H3>
							<P>Instantly saves and syncs snippets across all your devices.</P>
						</ListItem>
						<ListItem>
							<H3>Complete History</H3>
							<P>
								Retrieve any snippets from the first moment you started using
								the app.
							</P>
						</ListItem>
					</List>
				</SubSectionContent1>
			</SubSectionWrapper>
			<SubSectionWrapper>
				<SubSectionTitleWrapper>
					<SubSectionTitle>Access Clipboard anywhere</SubSectionTitle>
					<SubSectionSubTitle>
						Whether you’re on the go, or at your computer, you can access all
						your Clipboard snippets in a few simple clicks.
					</SubSectionSubTitle>
				</SubSectionTitleWrapper>
				<SubSectionContent2>
					<ImageWrapper>
						<Image src={ImageDevices} alt="image" />
					</ImageWrapper>
				</SubSectionContent2>
			</SubSectionWrapper>
			<SubSectionWrapper>
				<SubSectionTitleWrapper>
					<SubSectionTitle>Supercharge your workflow</SubSectionTitle>
					<SubSectionSubTitle>
						We’ve got the tools to boost your productivity.
					</SubSectionSubTitle>
				</SubSectionTitleWrapper>
				<SubSectionContent3>
					<List>
						<ListItem>
							<IconWrapper>
								<Icon src={IconBlacklist} alt="icon" />
							</IconWrapper>
							<H3>Create blacklists</H3>
							<P>
								Ensure sensitive information never makes its way to your
								clipboard by excluding certain sources.
							</P>
						</ListItem>
						<ListItem>
							<IconWrapper>
								<Icon src={IconText} alt="icon" />
							</IconWrapper>
							<H3>Plain text snippets</H3>
							<P>
								Remove unwanted formatting from copied text for a consistent
								look.
							</P>
						</ListItem>
						<ListItem>
							<IconWrapper>
								<Icon src={IconPreview} alt="icon" />
							</IconWrapper>
							<H3>Sneak preview</H3>
							<P>
								Quick preview of all snippets on your Clipboard for easy access.
							</P>
						</ListItem>
					</List>
				</SubSectionContent3>
			</SubSectionWrapper>
			<SubSectionWrapper>
				<SubSectionContent4>
					<List>
						<ListItem>
							<ImageWrapper>
								<Image src={LogoGoogle} alt="image" />
							</ImageWrapper>
						</ListItem>
						<ListItem>
							<ImageWrapper>
								<Image src={LogoIbm} alt="image" />
							</ImageWrapper>
						</ListItem>
						<ListItem>
							<ImageWrapper>
								<Image src={LogoMicrosoft} alt="image" />
							</ImageWrapper>
						</ListItem>
						<ListItem>
							<ImageWrapper>
								<Image src={LogoHp} alt="image" />
							</ImageWrapper>
						</ListItem>
						<ListItem>
							<ImageWrapper>
								<Image src={LogoVectorGraphics} alt="image" />
							</ImageWrapper>
						</ListItem>
					</List>
				</SubSectionContent4>
			</SubSectionWrapper>
			<SubSectionWrapper>
				<SubSectionTitleWrapper>
					<SubSectionTitle>Clipboard for iOS and Mac OS</SubSectionTitle>
					<SubSectionSubTitle>
						Available for free on the App Store. Download for Mac or iOS, sync
						with iCloud and you’re ready to start adding to your clipboard.
					</SubSectionSubTitle>
				</SubSectionTitleWrapper>
				<SubSectionContent5>
					<Button1>Download for iOS</Button1>
					<Button2>Download for Mac</Button2>
				</SubSectionContent5>
			</SubSectionWrapper>
		</Section>
	);
};

export default AboutSection;
