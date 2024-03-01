import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Container,
	CardImageSection,
	CardFront,
	Logo,
	CardDetails,
	CardNumber,
	Details,
	Name,
	Expiry,
	CardBack,
	Cvc,
	ContentSection,
	Form,
	InputWrapper,
	Label,
	InputFieldWrapper,
	Input,
	ErrorMessage,
	InputFieldsWrapper,
	InputFields,
	Button,
	FormCompleteMessage,
	Icon,
	Message,
	Title,
	Subtitle,
} from './components/UiElements';
import CardLogo from './assets/images/card-logo.svg';
import IconComplete from './assets/images/icon-complete.svg';
import './index.css';
import useFn from './hooks/useFn';

const CardDetailsForm = () => {
	const {
		name,
		cardNumber,
		expDate,
		cvc,
		showErrors,
		isFormSubmitted,
		errorMessages,
		defaultDetails,
		isStringEmpty,
		handleInputChange,
		handleInputKeyUp,
		handleFormSubmit,
		handleButtonClick,
	} = useFn();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<CardImageSection>
					<CardFront>
						<Logo src={CardLogo} alt="card-logo" />
						<CardDetails>
							<CardNumber>
								{isStringEmpty(cardNumber.value)
									? defaultDetails.cardNumber
									: cardNumber.value}
							</CardNumber>
							<Details>
								<Name>
									{isStringEmpty(name.value) ? defaultDetails.name : name.value}
								</Name>
								<Expiry>
									{isStringEmpty(expDate.mm.value)
										? defaultDetails.expDate.mm
										: expDate.mm.value}
									/
									{isStringEmpty(expDate.yy.value)
										? defaultDetails.expDate.yy
										: expDate.yy.value}
								</Expiry>
							</Details>
						</CardDetails>
					</CardFront>
					<CardBack>
						<Cvc>
							{isStringEmpty(cvc.value) ? defaultDetails.cvc : cvc.value}
						</Cvc>
					</CardBack>
				</CardImageSection>
				<ContentSection>
					{!isFormSubmitted ? (
						<Form onSubmit={handleFormSubmit}>
							<InputWrapper>
								<Label htmlFor="name">Cardholder Name</Label>
								<InputFieldWrapper isValid={!(showErrors && name.error)}>
									<Input
										placeholder="e.g. Jane Appleseed"
										id="name"
										name="name"
										value={name.value}
										onChange={(e) => {
											handleInputChange(e, 1);
										}}
									/>
								</InputFieldWrapper>
								{showErrors && name.error && (
									<ErrorMessage>{errorMessages[name.error]}</ErrorMessage>
								)}
							</InputWrapper>
							<InputWrapper>
								<Label htmlFor="cardnumber">Card Number</Label>
								<InputFieldWrapper isValid={!(showErrors && cardNumber.error)}>
									<Input
										placeholder="e.g. 1234 5678 9123 0000"
										id="cardnumber"
										name="cardnumber"
										value={cardNumber.value}
										maxLength={19}
										onChange={(e) => {
											handleInputChange(e, 2);
										}}
										onKeyUp={handleInputKeyUp}
									/>
								</InputFieldWrapper>
								{showErrors && cardNumber.error && (
									<ErrorMessage>{errorMessages[cardNumber.error]}</ErrorMessage>
								)}
							</InputWrapper>
							<InputFieldsWrapper>
								<InputWrapper>
									<Label htmlFor="mmyy">Exp. Date (MM/YY)</Label>
									<InputFields>
										<InputFieldWrapper
											isValid={!(showErrors && expDate.mm.error)}
										>
											<Input
												placeholder="MM"
												id="mm"
												name="mm"
												value={expDate.mm.value}
												maxLength={2}
												onChange={(e) => {
													handleInputChange(e, 3);
												}}
											/>
										</InputFieldWrapper>
										<InputFieldWrapper
											isValid={!(showErrors && expDate.yy.error)}
										>
											<Input
												placeholder="YY"
												id="yy"
												name="yy"
												value={expDate.yy.value}
												maxLength={2}
												onChange={(e) => {
													handleInputChange(e, 4);
												}}
											/>
										</InputFieldWrapper>
									</InputFields>
									{showErrors && expDate.error && (
										<ErrorMessage>{errorMessages[expDate.error]}</ErrorMessage>
									)}
								</InputWrapper>
								<InputWrapper>
									<Label htmlFor="cvc">CVC</Label>
									<InputFieldWrapper isValid={!(showErrors && cvc.error)}>
										<Input
											placeholder="e.g. 123"
											id="cvc"
											name="cvc"
											value={cvc.value}
											maxLength={3}
											onChange={(e) => {
												handleInputChange(e, 5);
											}}
										/>
									</InputFieldWrapper>
									{showErrors && cvc.error && (
										<ErrorMessage>{errorMessages[cvc.error]}</ErrorMessage>
									)}
								</InputWrapper>
							</InputFieldsWrapper>
							<Button type="submit">Confirm</Button>
						</Form>
					) : (
						<FormCompleteMessage>
							<Icon src={IconComplete} alt="icon-complete" />
							<Message>
								<Title>Thank you!</Title>
								<Subtitle>We've added your card details</Subtitle>
							</Message>
							<Button type="reset" onClick={handleButtonClick}>
								Continue
							</Button>
						</FormCompleteMessage>
					)}
				</ContentSection>
			</Container>
		</ThemeProvider>
	);
};

export default CardDetailsForm;
