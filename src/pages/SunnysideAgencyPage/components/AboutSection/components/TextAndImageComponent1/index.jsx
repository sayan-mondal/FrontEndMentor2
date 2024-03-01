import { useTheme } from 'styled-components';
import {
	Container,
	TextWrapper,
	TextInnerWrapper,
	Title,
	SubTitle,
	Link,
	ImageWrapper,
	Image,
} from './UiElements';

const TextAndImageComponent1 = ({ type, data }) => {
	const isMobile = useTheme().isMobile;
	const imageSrc = isMobile ? data.image.mobile : data.image.desktop;

	return (
		<Container type={type}>
			<TextWrapper>
				<TextInnerWrapper>
					<Title>{data.title}</Title>
					<SubTitle>{data.subtitle}</SubTitle>
					<Link href="#">Learn more</Link>
				</TextInnerWrapper>
			</TextWrapper>
			<ImageWrapper bg={imageSrc}>
				<Image src={imageSrc} alt="image" />
			</ImageWrapper>
		</Container>
	);
};

export default TextAndImageComponent1;
