import {
	Card,
	CardBody,
	CardTitleWrapper,
	CardTitle,
	Options,
	Circle,
	CardContent,
	Time,
	PreviousTime,
} from './components/UiElements';

const StatsCard = (props) => {
	const { title, currentTime, previousTime, statType } = props;

	return (
		<Card title={title}>
			<Options>
				<Circle />
				<Circle />
				<Circle />
			</Options>
			<CardBody>
				<CardTitleWrapper>
					<CardTitle>{title}</CardTitle>
				</CardTitleWrapper>
				<CardContent>
					<Time>{currentTime}</Time>
					<PreviousTime statType={statType}>{previousTime}</PreviousTime>
				</CardContent>
			</CardBody>
		</Card>
	);
};

export default StatsCard;
