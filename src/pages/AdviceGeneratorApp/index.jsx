import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Main,
	AdviceSkeleton,
	SkeletonTitle,
	SkeletonAdvice,
	AdviceWrapper,
	Title,
	Advice,
	ErrorWrapper,
	Error,
	Picture,
	Source,
	Image,
	Button,
	Icon,
} from './components/UiElements';
import { useHttp } from './utilities/hooks/useHttp';
import { getAdvice } from './utilities/api/apiHelperFunctions';
import { BASEURL } from './utilities/api/apiRoutes';
import PatternDividerDesktop from './assets/images/pattern-divider-desktop.svg';
import PatternDividerMobile from './assets/images/pattern-divider-mobile.svg';
import IconDice from './assets/images/icon-dice.svg';
import './index.css';

const AdviceGeneratorApp = () => {
	const {
		sendRequest,
		status,
		data: adviceObj,
		// error,
	} = useHttp(getAdvice, true);
	const animation = { opacity: [0.5, 1, 0.5] };
	const transition = { duration: 1.5, repeat: Infinity };

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	const handleButtonClick = (e) => {
		sendRequest();
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Main>
				{status === 'pending' ? (
					<AdviceSkeleton>
						<SkeletonTitle animate={animation} transition={transition} />
						<SkeletonAdvice animate={animation} transition={transition} />
					</AdviceSkeleton>
				) : adviceObj ? (
					<AdviceWrapper>
						<Title>Advice #{adviceObj.id}</Title>
						<Advice cite={BASEURL}>{adviceObj.advice}</Advice>
					</AdviceWrapper>
				) : (
					<ErrorWrapper>
						<Error>Unable to fetch advice!</Error>
					</ErrorWrapper>
				)}
				<Picture>
					<Source srcSet={PatternDividerMobile} />
					<Image src={PatternDividerDesktop} alt="PatternDividerDesktop" />
				</Picture>
				<Button onClick={handleButtonClick}>
					<Icon src={IconDice} alt="IconDice" />
				</Button>
			</Main>
		</ThemeProvider>
	);
};

export default AdviceGeneratorApp;
