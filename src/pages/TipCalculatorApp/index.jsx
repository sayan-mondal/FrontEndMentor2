import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Main,
	Logo,
	Container,
	InputSection,
	InputField,
	InputLabel,
	InputWrapper,
	Icon,
	Input,
	InputOptionList,
	InputOptionListItem,
	InputOption,
	OutputSection,
	Outputs,
	OutputWrapper,
	OutputTitle,
	Output,
	Button,
} from './components/UiElements';
import { useCompute } from './hooks/useCompute';
import ImageLogo from './assets/images/logo.svg';
import IconDollar from './assets/images/icon-dollar.svg';
import IconPerson from './assets/images/icon-person.svg';
import './index.css';

const regex1 = /(^[\d]*)\.?([\d]*$)/;
const regex2 = /^\d*$/;

const TipCalculatorApp = () => {
	const {
		billAmount,
		selectedTip,
		noOfPeople,
		tipAmount,
		total,
		setBillAmount,
		setSelectedTip,
		setNoOfPeople,
		isInitState,
		reset,
	} = useCompute();

	const handleBillAmountChange = (e) => {
		const enteredBillAmount = e.target.value;

		if (!regex1.test(enteredBillAmount)) return;

		setBillAmount(enteredBillAmount);
	};

	const handleSelectTip = (id, value) => {
		setSelectedTip({ id, value });
	};

	const handleCustomTipChange = (e) => {
		const enteredCustomTip = e.target.value;

		if (!regex2.test(enteredCustomTip)) return;

		setSelectedTip({ id: 6, value: enteredCustomTip });
	};

	const handleNoOfPeopleChange = (e) => {
		const enteredNoOfPeople = e.target.value;

		if (!regex2.test(enteredNoOfPeople)) return;

		setNoOfPeople(enteredNoOfPeople);
	};

	const handleButtonClick = () => {
		reset();
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Main>
				<Logo src={ImageLogo} alt="logo" />
				<Container>
					<InputSection>
						<InputField>
							<InputLabel htmlFor="bill">Bill</InputLabel>
							<InputWrapper>
								<Icon src={IconDollar} alt="icon-dollar" />
								<Input
									type="text"
									inputmode="numeric"
									placeholder="0"
									name="bill"
									id="bill"
									value={billAmount}
									onChange={handleBillAmountChange}
								/>
							</InputWrapper>
						</InputField>
						<InputField>
							<InputLabel>Select Tip %</InputLabel>
							<InputOptionList>
								<InputOptionListItem>
									<InputOption
										selected={selectedTip.id === 1 ? true : false}
										onClick={() => {
											handleSelectTip(1, '5');
										}}
									>
										5%
									</InputOption>
								</InputOptionListItem>
								<InputOptionListItem>
									<InputOption
										selected={selectedTip.id === 2 ? true : false}
										onClick={() => {
											handleSelectTip(2, '10');
										}}
									>
										10%
									</InputOption>
								</InputOptionListItem>
								<InputOptionListItem>
									<InputOption
										selected={selectedTip.id === 3 ? true : false}
										onClick={() => {
											handleSelectTip(3, '15');
										}}
									>
										15%
									</InputOption>
								</InputOptionListItem>
								<InputOptionListItem>
									<InputOption
										selected={selectedTip.id === 4 ? true : false}
										onClick={() => {
											handleSelectTip(4, '25');
										}}
									>
										25%
									</InputOption>
								</InputOptionListItem>
								<InputOptionListItem>
									<InputOption
										selected={selectedTip.id === 5 ? true : false}
										onClick={() => {
											handleSelectTip(5, '50');
										}}
									>
										50%
									</InputOption>
								</InputOptionListItem>
								<InputOptionListItem>
									<InputWrapper custom>
										<Input
											type="text"
											inputmode="numeric"
											pattern="\d*"
											placeholder="Custom"
											name="customtip"
											id="customtip"
											value={selectedTip.id === 6 ? selectedTip.value : ''}
											onChange={handleCustomTipChange}
										/>
									</InputWrapper>
								</InputOptionListItem>
							</InputOptionList>
						</InputField>
						<InputField>
							<InputLabel htmlFor="person">Number of People</InputLabel>
							<InputWrapper>
								<Icon src={IconPerson} alt="icon-person" />
								<Input
									type="text"
									inputmode="numeric"
									placeholder="0"
									name="person"
									id="person"
									value={noOfPeople}
									onChange={handleNoOfPeopleChange}
								/>
							</InputWrapper>
						</InputField>
					</InputSection>
					<OutputSection>
						<Outputs>
							<OutputWrapper>
								<OutputTitle>
									Tip Amount <br />
									<span>/ person</span>
								</OutputTitle>
								<Output>{tipAmount}</Output>
							</OutputWrapper>
							<OutputWrapper>
								<OutputTitle>
									Total <br />
									<span>/ person</span>
								</OutputTitle>
								<Output>{total}</Output>
							</OutputWrapper>
						</Outputs>
						<Button
							type="reset"
							disabled={isInitState()}
							onClick={handleButtonClick}
						>
							Reset
						</Button>
					</OutputSection>
				</Container>
			</Main>
		</ThemeProvider>
	);
};

export default TipCalculatorApp;
