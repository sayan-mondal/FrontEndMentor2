import { getPlatformData } from '../../Utilities/helperFunctions';
import { Icon, ValueUpdate } from '../CommonUiElements';
import {
	Container,
	UserNameWrapper,
	UserName,
	StatWrapper,
	Stat,
	StatName,
} from './components/UiElements';

const SocialMediaCard = (props) => {
	const { platform, userName, statName, statValue, statUpdate } = props;

	const platformData = getPlatformData(platform);

	return (
		<Container platformColor={platformData.color}>
			<UserNameWrapper>
				<Icon src={platformData.icon} alt="icon" />
				<UserName href="#">{userName}</UserName>
			</UserNameWrapper>
			<StatWrapper>
				<Stat>{statValue}</Stat>
				<StatName>{statName}</StatName>
			</StatWrapper>
			<ValueUpdate type={statUpdate.type}>{statUpdate.value} Today</ValueUpdate>
		</Container>
	);
};

export default SocialMediaCard;
