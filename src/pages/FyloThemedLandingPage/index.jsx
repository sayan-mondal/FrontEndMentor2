import Theme from './theme';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { Layout } from './components/uiElements';
import './index.css';

const FyloThemedLandingPage = () => {
	return (
		<Theme>
			<Layout>
				<Header />
				<MainSection />
				<Footer />
			</Layout>
		</Theme>
	);
};

export default FyloThemedLandingPage;
