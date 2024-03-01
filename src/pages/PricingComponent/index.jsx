import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Container,
	Title,
	PriceToggle,
	ToggleOption,
	Toggle,
	PriceList,
	PriceListItem,
	Name,
	Price,
	Feature,
	Button,
} from './components/UiElements';
import './index.css';

const PricingComponent = () => {
	const [toggleOption, setToggleOption] = useState(1);

	const handleSetToggleOption = () => {
		setToggleOption((curVal) => (curVal ? 0 : 1));
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<Title>Our Pricing</Title>
				<PriceToggle>
					<ToggleOption>Annually</ToggleOption>
					<Toggle toggleOption={toggleOption} onClick={handleSetToggleOption} />
					<ToggleOption>Monthly</ToggleOption>
				</PriceToggle>
				<PriceList>
					<PriceListItem>
						<Name>Basic</Name>
						<Price>${[19.99, 199.99][toggleOption]}</Price>
						<Feature>500 GB Storage</Feature>
						<Feature>2 Users Allowed</Feature>
						<Feature>Send up to 3 GB</Feature>
						<Button href="#">Learn More</Button>
					</PriceListItem>
					<PriceListItem featured>
						<Name>Professional</Name>
						<Price>${[24.99, 249.99][toggleOption]}</Price>
						<Feature>1 TB Storage</Feature>
						<Feature>5 Users Allowed</Feature>
						<Feature>Send up to 10 GB</Feature>
						<Button href="#">Learn More</Button>
					</PriceListItem>
					<PriceListItem>
						<Name>Master</Name>
						<Price>${[39.99, 399.99][toggleOption]}</Price>
						<Feature>2 TB Storage</Feature>
						<Feature>10 Users Allowed</Feature>
						<Feature>Send up to 20 GB</Feature>
						<Button href="#">Learn More</Button>
					</PriceListItem>
				</PriceList>
			</Container>
		</ThemeProvider>
	);
};

export default PricingComponent;
