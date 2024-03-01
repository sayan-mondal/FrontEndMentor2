import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import pallete from './pallete';
import typography from './typography';
import shapes from './shapes';
import breakpoints from './breakpoints';
import { ThemeConfigGenerator } from './themeHelperFunction';
import './index.css';

const Theme = ({ children, themeId }) => {
	const themeElements = {
		pallete,
		typography,
		shapes,
		breakpoints,
	};

	const theme = ThemeConfigGenerator(themeId, themeElements);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
