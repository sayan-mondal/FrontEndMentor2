import {
	Main,
	IntroSection,
	ImageWrapper,
	HeadingWrapper,
	Image,
	H2,
	P,
	Button,
	FeaturesSection,
	FeatureWrapper,
	H3,
	AboutSection,
	Wrapper,
	A,
	Icon,
	TestimonialSection,
	TestimonialWrapper,
	InnerWrapper,
	Span,
	CTASection,
	CTAWrapper,
	EmailInput,
	Form,
} from './components/mainUiElements';
import IllustrationIntro from '../../assets/images/illustration-intro.png';
import IconAccessAnywhere from '../../assets/images/icon-access-anywhere.svg';
import IconSecurity from '../../assets/images/icon-security.svg';
import IconCollaboration from '../../assets/images/icon-collaboration.svg';
import IconAnyFile from '../../assets/images/icon-any-file.svg';
import IllustrationStayProductive from '../../assets/images/illustration-stay-productive.png';
import IconArrow from '../../assets/images/icon-arrow.svg';
import ImageProfile1 from '../../assets/images/profile-1.jpg';
import ImageProfile2 from '../../assets/images/profile-2.jpg';
import ImageProfile3 from '../../assets/images/profile-3.jpg';

const MainSection = () => {
	const onFormSubmit = (e) => {
		const email = e.target[0].value;

		console.log(email);
	};

	return (
		<Main>
			<IntroSection>
				<ImageWrapper>
					<Image src={IllustrationIntro} alt="illustration" />
				</ImageWrapper>
				<HeadingWrapper>
					<H2>All your files in one secure location, accessible anywhere.</H2>
					<P>
						Fylo stores all your most important files in one secure location.
						Access them wherever you need, share and collaborate with friends
						family, and co-workers.
					</P>
				</HeadingWrapper>
				<Button>Get Started</Button>
			</IntroSection>
			<FeaturesSection>
				<FeatureWrapper>
					<ImageWrapper>
						<Image src={IconAccessAnywhere} alt="icon" />
					</ImageWrapper>
					<H3>Access your files, anywhere</H3>
					<P>
						The ability to use a smartphone, tablet, or computer to access your
						account means your files follow you everywhere.
					</P>
				</FeatureWrapper>
				<FeatureWrapper>
					<ImageWrapper>
						<Image src={IconSecurity} alt="icon" />
					</ImageWrapper>
					<H3>Security you can trust</H3>
					<P>
						2-factor authentication and user-controlled encryption are just a
						couple of the security features we allow to help secure your files.
					</P>
				</FeatureWrapper>
				<FeatureWrapper>
					<ImageWrapper>
						<Image src={IconCollaboration} alt="icon" />
					</ImageWrapper>
					<H3>Real-time collaboration</H3>
					<P>
						Securely share files and folders with friends, family and colleagues
						for live collaboration. No email attachments required.
					</P>
				</FeatureWrapper>
				<FeatureWrapper>
					<ImageWrapper>
						<Image src={IconAnyFile} alt="icon" />
					</ImageWrapper>
					<H3>Store any type of file</H3>
					<P>
						Whether you're sharing holidays photos or work documents, Fylo has
						you covered allowing for all file types to be securely stored and
						shared.
					</P>
				</FeatureWrapper>
			</FeaturesSection>
			<AboutSection>
				<ImageWrapper>
					<Image src={IllustrationStayProductive} alt="illustration" />
				</ImageWrapper>
				<Wrapper>
					<H2>Stay productive, wherever you are</H2>
					<P>
						Never let location be an issue when accessing your files. Fylo has
						you covered for all of your file storage needs.
					</P>
					<P>
						Securely share files and folders with friends, family and colleagues
						for live collaboration. No email attachments required.
					</P>
					<A>
						See how Fylo works
						<Icon src={IconArrow} alt="icon" />
					</A>
				</Wrapper>
			</AboutSection>
			<TestimonialSection>
				<TestimonialWrapper>
					<P>
						Fylo has improved our team productivity by an order of magnitude.
						Since making the switch our team has become a well-oiled
						collaboration machine.
					</P>
					<Wrapper>
						<ImageWrapper>
							<Image src={ImageProfile1} />
						</ImageWrapper>
						<InnerWrapper>
							<Span>Satish Patel</Span>
							<Span>Founder & CEO, Huddle</Span>
						</InnerWrapper>
					</Wrapper>
				</TestimonialWrapper>
				<TestimonialWrapper>
					<P>
						Fylo has improved our team productivity by an order of magnitude.
						Since making the switch our team has become a well-oiled
						collaboration machine.
					</P>
					<Wrapper>
						<ImageWrapper>
							<Image src={ImageProfile2} />
						</ImageWrapper>
						<InnerWrapper>
							<Span>Bruce McKenzie</Span>
							<Span>Founder & CEO, Huddle</Span>
						</InnerWrapper>
					</Wrapper>
				</TestimonialWrapper>
				<TestimonialWrapper>
					<P>
						Fylo has improved our team productivity by an order of magnitude.
						Since making the switch our team has become a well-oiled
						collaboration machine.
					</P>
					<Wrapper>
						<ImageWrapper>
							<Image src={ImageProfile3} />
						</ImageWrapper>
						<InnerWrapper>
							<Span>Iva Boyd</Span>
							<Span>Founder & CEO, Huddle</Span>
						</InnerWrapper>
					</Wrapper>
				</TestimonialWrapper>
			</TestimonialSection>
			<CTASection>
				<CTAWrapper>
					<H3>Get early access today</H3>
					<P>
						It only takes a minute to sign up and our free starter tier is
						extremely generous. If you have any questions, our support team
						would be happy to help you.
					</P>
					<Form onSubmit={onFormSubmit} id="form">
						<EmailInput form="form" />
						<Button type="submit">Get Started For Free</Button>
					</Form>
				</CTAWrapper>
			</CTASection>
		</Main>
	);
};

export default MainSection;
