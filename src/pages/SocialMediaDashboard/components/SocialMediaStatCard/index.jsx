import { getPlatformData } from '../../Utilities/helperFunctions';
import { Icon, ValueUpdate } from '../CommonUiElements';
import {
	Container,
	TitleWrapper,
	StatName,
	StatWrapper,
	Stat,
} from './components/UiElements';

const SocialMediaStatCard = (props) => {
	const { platform, statName, statValue, statUpdate } = props;

	const platformData = getPlatformData(platform);

	return (
		<Container>
			<TitleWrapper>
				<StatName>{statName}</StatName>
				<Icon src={platformData.icon} alt="icon" />
			</TitleWrapper>
			<StatWrapper>
				<Stat>{statValue}</Stat>
				<ValueUpdate type={statUpdate.type}>{statUpdate.value}</ValueUpdate>
			</StatWrapper>
		</Container>
	);
};

export default SocialMediaStatCard;
