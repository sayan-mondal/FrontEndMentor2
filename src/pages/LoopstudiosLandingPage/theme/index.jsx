import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyle';
import { themeGenerator } from './utilities/themeHelperFunctions';
import './index.css';

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
