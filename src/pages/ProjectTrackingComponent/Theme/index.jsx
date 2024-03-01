import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Elements/GlobalStyles';
import { themeGenerator } from './Utilities/helperFunctions';
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
