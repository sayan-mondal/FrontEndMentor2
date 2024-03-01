import Theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import {
	Layout,
	Main,
	Wrapper,
	H1,
	P,
	Button,
	ImageWrapper,
	Image,
	IntroSection,
	FeaturesSection,
	FeatureWrapper,
	H2,
	CTAWrapper,
} from './components/uiElements';
import './index.css';
import IllustrationMockups from './assets/images/illustration-mockups.svg';
import IllustrationGrowTogether from './assets/images/illustration-grow-together.svg';
import IllustrationFlowingConversation from './assets/images/illustration-flowing-conversation.svg';
import IllustrationYourUsers from './assets/images/illustration-your-users.svg';

const HuddleFeatureBlocksPage = () => {
	return (
		<Theme>
			<Layout>
				<Header />
				<Main>
					<IntroSection>
						<Wrapper>
							<H1>Build The Community Your Fans Will Love</H1>
							<P>
								Huddle re-imagines the way we build communities. You have a
								voice, but so does your audience. Create connections with your
								users as you engage in genuine discussion.{' '}
							</P>
							<Button>Get Started For Free</Button>
						</Wrapper>
						<ImageWrapper>
							<Image src={IllustrationMockups} alt="illustration" />
						</ImageWrapper>
					</IntroSection>
					<FeaturesSection>
						<FeatureWrapper>
							<Wrapper>
								<H2>Grow Together</H2>
								<P>
									Generate meaningful discussions with your audience and build a
									strong, loyal community. Think of the insightful conversations
									you miss out on with a feedback form.
								</P>
							</Wrapper>
							<ImageWrapper>
								<Image src={IllustrationGrowTogether} alt="illustration" />
							</ImageWrapper>
						</FeatureWrapper>
						<FeatureWrapper>
							<Wrapper>
								<H2>Flowing Conversations</H2>
								<P>
									You wouldn't paginate a conversation in real life, so why do
									it online? Our threads have just-in-time loading for a more
									natural flow.
								</P>
							</Wrapper>
							<ImageWrapper>
								<Image
									src={IllustrationFlowingConversation}
									alt="illustration"
								/>
							</ImageWrapper>
						</FeatureWrapper>
						<FeatureWrapper>
							<Wrapper>
								<H2>Your Users</H2>
								<P>
									It takes no time at all to integrate Huddle with your app's
									authentication solution. This means, once signed in to your
									app, your users can start chatting immediately.
								</P>
							</Wrapper>
							<ImageWrapper>
								<Image src={IllustrationYourUsers} alt="illustration" />
							</ImageWrapper>
						</FeatureWrapper>
					</FeaturesSection>
					<CTAWrapper>
						<Wrapper>
							<H2>Ready To Build Your Community?</H2>
							<Button>Get Started For Free</Button>
						</Wrapper>
					</CTAWrapper>
				</Main>
				<Footer />
			</Layout>
		</Theme>
	);
};

export default HuddleFeatureBlocksPage;
