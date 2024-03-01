import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Container,
	TitleWrapper,
	Title,
	Subtitle,
	Content,
	TopSection,
	PageViewsCount,
	Price,
	CustomSliderWrapper,
	CustomSlider,
	BillingOptionsWrapper,
	BillingOptionWrapper,
	BillingOption,
	Toggle,
	Discount,
	BottomSection,
	FeaturesList,
	FeatureListItem,
	Feature,
	Button,
} from './components/UiElements';
import useStates from './hooks/useStates';
import './index.css';

const DATA = {
	monthlyPricing: [
		{ pageViewsCount: '10K', price: 8 },
		{ pageViewsCount: '50K', price: 12 },
		{ pageViewsCount: '100K', price: 16 },
		{ pageViewsCount: '500k', price: 24 },
		{ pageViewsCount: '1M', price: 36 },
	],
	yearlyDiscountPercent: 25,
};

const InteractivePricingComponent = () => {
	const {
		sliderValue,
		toggleValue,
		sliderProps,
		pageViewsCount,
		price,
		handleSliderValueChange,
		handleToggleButtonClick,
	} = useStates(DATA);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<TitleWrapper>
					<Title>Simple, traffic-based pricing</Title>
					<Subtitle>
						Sign-up for our 30-day trial. <span>No credit card required.</span>
					</Subtitle>
				</TitleWrapper>
				<Content>
					<TopSection>
						<PageViewsCount>{pageViewsCount} Pageviews</PageViewsCount>
						<Price toggleValue={toggleValue}>{price}</Price>
						<CustomSliderWrapper>
							<CustomSlider
								type="range"
								min={sliderProps.min}
								max={sliderProps.max}
								value={sliderValue}
								onChange={handleSliderValueChange}
							/>
						</CustomSliderWrapper>
						<BillingOptionsWrapper>
							<BillingOptionWrapper>
								<BillingOption>
									Monthly <span>Billing</span>
								</BillingOption>
							</BillingOptionWrapper>
							<Toggle
								onClick={handleToggleButtonClick}
								toggleValue={toggleValue}
							/>
							<BillingOptionWrapper>
								<BillingOption>
									Yearly <span>Billing</span>
								</BillingOption>
								<Discount>{DATA.yearlyDiscountPercent}%</Discount>
							</BillingOptionWrapper>
						</BillingOptionsWrapper>
					</TopSection>
					<BottomSection>
						<FeaturesList>
							<FeatureListItem>
								<Feature>Unlimited websites</Feature>
							</FeatureListItem>
							<FeatureListItem>
								<Feature>100% data ownership</Feature>
							</FeatureListItem>
							<FeatureListItem>
								<Feature>Email reports</Feature>
							</FeatureListItem>
						</FeaturesList>
						<Button href="#">Start my trial</Button>
					</BottomSection>
				</Content>
			</Container>
		</ThemeProvider>
	);
};

export default InteractivePricingComponent;
