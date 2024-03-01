import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { ThemeGenerator } from './Utilities/themeHelperFunctions';

const Theme = ({ isNavMenuOpen, children }) => {
	const theme = ThemeGenerator(isNavMenuOpen);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
