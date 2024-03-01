import Theme from './theme';
import { Layout, Main } from './components/uiElements';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import CreationsSection from './components/CreationsSection';
import Footer from './components/Footer';
import { useState } from 'react';

const LoopstudiosLandingPage = () => {
	const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

	const toggleIsMobileNavMenuOpen = () => {
		setIsMobileNavMenuOpen((curVal) => !curVal);
	};

	return (
		<Theme>
			<Layout isMobileNavMenuOpen={isMobileNavMenuOpen}>
				<Header
					isMobileNavMenuOpen={isMobileNavMenuOpen}
					toggleIsMobileNavMenuOpen={toggleIsMobileNavMenuOpen}
				/>
				<Main>
					<IntroSection />
					<AboutSection />
					<CreationsSection />
				</Main>
				<Footer />
			</Layout>
		</Theme>
	);
};

export default LoopstudiosLandingPage;
