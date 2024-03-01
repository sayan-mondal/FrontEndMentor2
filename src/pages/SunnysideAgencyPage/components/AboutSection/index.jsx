import TextAndImageComponent1 from './components/TextAndImageComponent1';
import { Container } from './components/UiElements';

const AboutSection = ({ aboutData }) => {
	return (
		<Container>
			<TextAndImageComponent1 data={aboutData[0]} />
			<TextAndImageComponent1 type={2} data={aboutData[1]} />
		</Container>
	);
};

export default AboutSection;
