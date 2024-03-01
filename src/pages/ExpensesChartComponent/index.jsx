import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Container,
	TopSection,
	BalanceWrapper,
	BalanceTitle,
	Balance,
	Image,
	BottomSection,
	Title,
	ChartContainer,
	ChartData,
	Data,
	DataFor,
	Stats,
	Stat,
	StatTitle,
	StatValue,
} from './components/UiElements';
import ImageLogo from './assets/images/logo.svg';
import DATA from './data/data.json';
import './index.css';

const ExpensesChartComponent = () => {
	const computeMaxDataValue = (data) => {
		return Math.max(...data.map((dataElement) => dataElement.amount));
	};

	const maxDataValue = computeMaxDataValue(DATA);

	const computeDataValueRatio = (dataValue) => {
		return dataValue / maxDataValue;
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<TopSection>
					<BalanceWrapper>
						<BalanceTitle>My balance</BalanceTitle>
						<Balance>$921.48</Balance>
					</BalanceWrapper>
					<Image src={ImageLogo} alt="logo" />
				</TopSection>
				<BottomSection>
					<Title>Spending - Last 7 days</Title>
					<ChartContainer>
						{DATA.map((data, index) => (
							<ChartData key={index}>
								<Data dataValueRatio={computeDataValueRatio(data.amount)} />
								<DataFor>{data.day}</DataFor>
							</ChartData>
						))}
					</ChartContainer>
					<Stats>
						<Stat>
							<StatTitle>Total this month</StatTitle>
							<StatValue>$478.33</StatValue>
						</Stat>
						<Stat>
							<StatValue>+2.4%</StatValue>
							<StatTitle>from last month</StatTitle>
						</Stat>
					</Stats>
				</BottomSection>
			</Container>
		</ThemeProvider>
	);
};

export default ExpensesChartComponent;
