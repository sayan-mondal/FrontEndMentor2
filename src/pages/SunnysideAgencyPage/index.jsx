import Theme from './Theme';
import Header from './components/Header';
import Intro from './components/Intro';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import TestimonialSection from './components/TestimonialSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import { Layout, Main } from './components/UiElements';
import DATA from './DATA/data';
import { useEffect, useState } from 'react';

const SunnysideAgencyPage = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const onResize = (e) => {
			const width = e.target.innerWidth;

			if (width < 576 && isMobile === false) setIsMobile(true);

			if (width >= 576 && isMobile === true) setIsMobile(false);
		};

		window.addEventListener('resize', onResize);
	}, [isMobile]);

	return (
		<Theme isMobile={isMobile}>
			<Layout>
				<Header />
				<Main>
					<Intro id="intro" />
					<AboutSection id="about" aboutData={DATA.about} />
					<ServiceSection id="services" servicesData={DATA.services} />
					<TestimonialSection
						id="testimonials"
						testimonialsData={DATA.testimonials}
					/>
					<GallerySection id=" gallery" galleryData={DATA.gallery} />
				</Main>
				<Footer />
			</Layout>
		</Theme>
	);
};

export default SunnysideAgencyPage;
