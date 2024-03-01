import {
	Section,
	Content,
	Heading,
	SubHeading,
	CTAWrapper,
	Button1,
	Button2,
} from './components/introUiElements';

const IntroSection = () => {
	return (
		<Section>
			<Content>
				<Heading>A modern publishing platform</Heading>
				<SubHeading>Grow your audience and build your online brand</SubHeading>
				<CTAWrapper>
					<Button1>Start for Free</Button1>
					<Button2>Learn More</Button2>
				</CTAWrapper>
			</Content>
		</Section>
	);
};

export default IntroSection;
