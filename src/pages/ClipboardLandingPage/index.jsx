import Theme from './theme';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { Layout, Main } from './components/uiElements';
import './index.css';

const ClipboardLandingPage = () => {
	return (
		<Theme>
			<Layout>
				<Main>
					<IntroSection />
					<AboutSection />
				</Main>
				<Footer />
			</Layout>
		</Theme>
	);
};

export default ClipboardLandingPage;
