import {
	Card,
	CardContent,
	Avatar,
	Name,
	CardActions,
	StatTypeList,
	StatType,
} from './components/UiElements';

const UserCard = (props) => {
	const { profilePhoto, name, statType, setStatType } = props;

	const handleOnClick = (type) => {
		setStatType(type);
	};

	return (
		<Card>
			<CardContent>
				<Avatar src={profilePhoto} alt="profile-photo" />
				<Name>{name}</Name>
			</CardContent>
			<CardActions>
				<StatTypeList>
					<StatType
						isActive={statType === 'daily'}
						onClick={(e) => {
							handleOnClick('daily');
						}}
					>
						Daily
					</StatType>
					<StatType
						isActive={statType === 'weekly'}
						onClick={(e) => {
							handleOnClick('weekly');
						}}
					>
						Weekly
					</StatType>
					<StatType
						isActive={statType === 'monthly'}
						onClick={(e) => {
							handleOnClick('monthly');
						}}
					>
						Monthly
					</StatType>
				</StatTypeList>
			</CardActions>
		</Card>
	);
};

export default UserCard;
