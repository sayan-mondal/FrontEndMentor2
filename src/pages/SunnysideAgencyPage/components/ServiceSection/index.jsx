import TextAndImageComponent2 from './components/TextAndImageComponent2';
import { Container } from './components/UiElements';

const ServiceSection = ({ servicesData }) => {
	return (
		<Container>
			<TextAndImageComponent2 id={0} data={servicesData[0]} />
			<TextAndImageComponent2 id={1} data={servicesData[1]} />
		</Container>
	);
};

export default ServiceSection;
