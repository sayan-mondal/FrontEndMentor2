import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { themeObjGenerator } from './utilities/themeHelperFunctions';

const Theme = ({ children }) => {
	const theme = themeObjGenerator();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
