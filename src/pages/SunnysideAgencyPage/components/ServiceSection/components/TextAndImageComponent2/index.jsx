import { useTheme } from 'styled-components';
import { Container, Image, Content, Title, Subtitle } from './UiElements';

const TextAndImageComponent2 = ({ id, data }) => {
	const isMobile = useTheme().isMobile;

	return (
		<Container id={id}>
			<Image
				src={isMobile ? data.image.mobile : data.image.desktop}
				alt="image"
			/>
			<Content>
				<Title>{data.title}</Title>
				<Subtitle>{data.subtitle}</Subtitle>
			</Content>
		</Container>
	);
};

export default TextAndImageComponent2;
