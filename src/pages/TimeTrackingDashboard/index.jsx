import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Main,
	UserCardWrapper,
	StatsCardWrapper,
} from './components/UiElements';
import UserCard from './components/UserCard';
import StatsCard from './components/StatsCard';
import ImageJeremy from './assets/images/image-jeremy.png';
import DATA from './data.json';
import './index.css';

const TimeTrackingDashboard = () => {
	const [statType, setStatType] = useState('weekly');

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Main>
				<UserCardWrapper>
					<UserCard
						profilePhoto={ImageJeremy}
						name="Jeremy Robson"
						statType={statType}
						setStatType={setStatType}
					/>
				</UserCardWrapper>
				{DATA.map((stat, index) => (
					<StatsCardWrapper key={index}>
						<StatsCard
							title={stat.title}
							currentTime={stat.timeframes[statType].current}
							previousTime={stat.timeframes[statType].previous}
							statType={statType}
						/>
					</StatsCardWrapper>
				))}
			</Main>
		</ThemeProvider>
	);
};

export default TimeTrackingDashboard;
