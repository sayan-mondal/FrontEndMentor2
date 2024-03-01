import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { themeGenerator } from './Utilities/themeHelperFunctions';
import './index.css';

const Theme = ({ isMobile, children }) => {
	const theme = themeGenerator(isMobile);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
