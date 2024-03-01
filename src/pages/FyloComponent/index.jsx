import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Container,
	LogoSection,
	Logo,
	IconList,
	IconLink,
	Icon,
	StorageDataSection,
	Info,
	InfoTooltipWrapper,
	InfoTooltip,
	CustomMeter,
	Meter,
	MeterLabelWrapper,
	MeterLabel,
} from './components/UiElements';
import ImageLogo from './assets/images/logo.svg';
import IconDocument from './assets/images/icon-document.svg';
import IconFolder from './assets/images/icon-folder.svg';
import IconUpload from './assets/images/icon-upload.svg';
import './index.css';

const FyloComponent = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<LogoSection>
					<Logo src={ImageLogo} alt="logo" />
					<IconList>
						<IconLink href="#">
							<Icon src={IconDocument} alt="icon-document" />
						</IconLink>
						<IconLink href="#">
							<Icon src={IconFolder} alt="icon-folder" />
						</IconLink>
						<IconLink href="#">
							<Icon src={IconUpload} alt="icon-upload" />
						</IconLink>
					</IconList>
				</LogoSection>
				<StorageDataSection>
					<Info>
						<span>You’ve used </span>
						<strong>815 GB</strong>
						<span> of your storage</span>
					</Info>
					<InfoTooltipWrapper>
						<InfoTooltip>
							<strong>185 </strong>
							<b>GB Left</b>
						</InfoTooltip>
					</InfoTooltipWrapper>
					<CustomMeter id="custommeter" value="815" min="0" max="1000">
						<Meter />
					</CustomMeter>
					<MeterLabelWrapper>
						<MeterLabel htmlFor="custommeter">0 GB</MeterLabel>
						<MeterLabel htmlFor="custommeter">1000 GB</MeterLabel>
					</MeterLabelWrapper>
				</StorageDataSection>
			</Container>
		</ThemeProvider>
	);
};

export default FyloComponent;
