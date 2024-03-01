import { useState } from 'react';
import Theme from './Theme';
import {
	Container,
	Header,
	HeaderLeftSection,
	Logo,
	Stat,
	HeaderRightSection,
	ThemeName,
	Toggle,
	Main,
	MainTopSection,
	MainBottomSection,
	SectionTitle,
	StatsWrapper,
	PlatformStatCardsWrapper,
} from './components/UiElements';
import DATA from './DATA/data.json';
import SocialMediaCard from './components/SocialMediaCard';
import SocialMediaStatCard from './components/SocialMediaStatCard';

const SocialMediaDashboard = () => {
	const [themeId, setThemeId] = useState(0);

	const handleToggleClick = () => {
		setThemeId((curThemeId) => !curThemeId);
	};

	return (
		<Theme themeId={themeId}>
			<Container>
				<Header>
					<HeaderLeftSection>
						<Logo>Social Media Dashboard</Logo>
						<Stat>Total Followers: {DATA.totalfollowers}</Stat>
					</HeaderLeftSection>
					<hr />
					<HeaderRightSection onClick={handleToggleClick}>
						<ThemeName>Dark Mode</ThemeName>
						<Toggle themeId={themeId} />
					</HeaderRightSection>
				</Header>
				<Main>
					<MainTopSection>
						{DATA.socialmediastats.map((socialMediasStat) => (
							<SocialMediaCard
								key={socialMediasStat.id}
								platform={socialMediasStat.platform}
								userName={socialMediasStat.username}
								statName={socialMediasStat.stats[0].name}
								statValue={socialMediasStat.stats[0].value}
								statUpdate={socialMediasStat.stats[0].update}
							/>
						))}
					</MainTopSection>
					<MainBottomSection>
						<SectionTitle>Overview - Today</SectionTitle>
						<StatsWrapper>
							{DATA.socialmediastats.map((socialMediasStat) => (
								<PlatformStatCardsWrapper key={socialMediasStat.id}>
									<SocialMediaStatCard
										platform={socialMediasStat.platform}
										statName={socialMediasStat.stats[1].name}
										statValue={socialMediasStat.stats[1].value}
										statUpdate={socialMediasStat.stats[1].update}
									/>
									<SocialMediaStatCard
										platform={socialMediasStat.platform}
										statName={socialMediasStat.stats[2].name}
										statValue={socialMediasStat.stats[2].value}
										statUpdate={socialMediasStat.stats[2].update}
									/>
								</PlatformStatCardsWrapper>
							))}
						</StatsWrapper>
					</MainBottomSection>
				</Main>
			</Container>
		</Theme>
	);
};

export default SocialMediaDashboard;
