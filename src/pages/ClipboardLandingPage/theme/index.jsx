import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { themeGenerator } from './utilities/themeHelperFunctions';

const Theme = ({ children }) => {
	const theme = themeGenerator();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
