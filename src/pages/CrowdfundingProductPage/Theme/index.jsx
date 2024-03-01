import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { themeGenerator } from './utilities/themeHelperFunctions';
import { Backdrop } from '../components/commonUiElements';
import './index.css';

const Theme = ({ showBackdrop, handleBackdropClick, children }) => {
	const theme = themeGenerator();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
			{showBackdrop && (
				<Backdrop showBackdrop={showBackdrop} onClick={handleBackdropClick} />
			)}
		</ThemeProvider>
	);
};

export default Theme;
