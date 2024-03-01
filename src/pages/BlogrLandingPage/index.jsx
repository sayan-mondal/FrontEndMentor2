import { useState } from 'react';
import Theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import { Layout, Main, Backdrop } from './components/uiElements';
import './index.css';

const BlogrLandingPage = () => {
	const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

	return (
		<Theme>
			<Layout>
				<Header
					isMobileNavMenuOpen={isMobileNavMenuOpen}
					setIsMobileNavMenuOpen={setIsMobileNavMenuOpen}
				/>
				<Main>
					<IntroSection />
					<AboutSection />
					<FeaturesSection />
				</Main>
				<Footer />
				{isMobileNavMenuOpen && <Backdrop />}
			</Layout>
		</Theme>
	);
};

export default BlogrLandingPage;
