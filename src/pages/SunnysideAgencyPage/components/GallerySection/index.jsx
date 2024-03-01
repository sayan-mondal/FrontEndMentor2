import { useTheme } from 'styled-components';
import { Container, ImageWrapper, Image } from './UiElements';

const GallerySection = ({ galleryData }) => {
	const isMobile = useTheme().isMobile;
	const imagesCount = galleryData.length;

	return (
		<Container imagesCount={imagesCount}>
			{galleryData.map((galleryImage) => (
				<ImageWrapper key={galleryImage.id}>
					<Image
						src={
							isMobile ? galleryImage.image.mobile : galleryImage.image.desktop
						}
					/>
				</ImageWrapper>
			))}
		</Container>
	);
};

export default GallerySection;
