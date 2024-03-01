import { useState } from 'react';
import Theme from './Theme';
import { Layout, Main } from './components/Uielements';
import Header from './components/Header';
import IntroSec from './components/IntroSection';
import Footer from './components/Footer';

const IntroSection = () => {
	const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
	const [mobileNavMenuHeight, setMobileNavMenuHeight] = useState('100vh');

	return (
		<Theme isNavMenuOpen={isNavMenuOpen}>
			<Layout
				isNavMenuOpen={isNavMenuOpen}
				mobileNavMenuHeight={mobileNavMenuHeight}
			>
				<Header
					isNavMenuOpen={isNavMenuOpen}
					setIsNavMenuOpen={setIsNavMenuOpen}
					setMobileNavMenuHeight={setMobileNavMenuHeight}
				/>
				<Main>
					<IntroSec />
				</Main>
				<Footer />
			</Layout>
		</Theme>
	);
};

export default IntroSection;
