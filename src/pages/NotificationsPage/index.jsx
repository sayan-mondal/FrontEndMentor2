import { useState, useEffect } from 'react';
import Theme from './theme';
import {
	Layout,
	Main,
	NotificationsWrapper,
	HeadingWrapper,
	Title,
	H2,
	Strong,
	Button,
	P,
	A,
	NotificationList,
	NotificationListItem,
	AvatarWrapper,
	NotificationWrapper,
	Notification,
	ImageWrapper,
	Image,
	Wrapper,
	Span,
	InlineContent,
	Content,
} from './components/uiElements';
import './index.css';
import AvatarMarkWebber from './assets/assets/images/avatar-mark-webber.webp';
import AvatarAngelaGray from './assets/assets/images/avatar-angela-gray.webp';
import AvatarJacobThompson from './assets/assets/images/avatar-jacob-thompson.webp';
import AvatarRizkyHasanuddin from './assets/assets/images/avatar-rizky-hasanuddin.webp';
import AvatarKimberlySmith from './assets/assets/images/avatar-kimberly-smith.webp';
import AvatarNathanPeterson from './assets/assets/images/avatar-nathan-peterson.webp';
import AvatarAnnaKim from './assets/assets/images/avatar-anna-kim.webp';
import ImageChess from './assets/assets/images/image-chess.webp';

const NotificationsPage = () => {
	const [notificationsArr, setNotificationsArr] = useState([]);
	const [unreadNotificationsCount, setUnreadNotificationsCount] =
		useState(null);

	useEffect(() => {
		let unreadNotifications = 3;

		let notifications = [...Array(7)].map((_, index) =>
			index < unreadNotifications ? { isRead: false } : { isRead: true }
		);

		setUnreadNotificationsCount(unreadNotifications);
		setNotificationsArr(notifications);
	}, []);

	const onButtonClick = () => {
		setUnreadNotificationsCount(0);
		setNotificationsArr(notificationsArr.map(() => ({ isRead: true })));
	};

	const onNotificationClick = (id) => {
		if (notificationsArr[id].isRead) return;

		setUnreadNotificationsCount((curVal) => curVal - 1);
		setNotificationsArr((curArr) => {
			curArr[id].isRead = true;
			return curArr;
		});
	};

	return (
		<Theme>
			<Layout>
				<Main>
					<NotificationsWrapper>
						<HeadingWrapper>
							<Title showCount={unreadNotificationsCount !== 0}>
								<H2>Notifications</H2>
								<Strong>{unreadNotificationsCount}</Strong>
							</Title>
							<Button type="button" onClick={onButtonClick}>
								Mark all as read
							</Button>
						</HeadingWrapper>
						<NotificationList>
							<NotificationListItem
								isRead={notificationsArr[0]?.isRead}
								onClick={() => {
									onNotificationClick(0);
								}}
							>
								<AvatarWrapper>
									<Image src={AvatarMarkWebber} alt="avatar" />
								</AvatarWrapper>
								<NotificationWrapper>
									<Notification>
										<Wrapper>
											<P>
												<A>
													<Strong>Mark Webber</Strong>
												</A>
												reacted to your recent post
												<A>
													<Strong>My first tournament today!</Strong>
												</A>
												<Span>&#9679;</Span>
											</P>
											<P>1m ago</P>
										</Wrapper>
									</Notification>
								</NotificationWrapper>
							</NotificationListItem>
							<NotificationListItem
								isRead={notificationsArr[1]?.isRead}
								onClick={() => {
									onNotificationClick(1);
								}}
							>
								<AvatarWrapper>
									<Image src={AvatarAngelaGray} alt="avatar" />
								</AvatarWrapper>
								<NotificationWrapper>
									<Notification>
										<Wrapper>
											<P>
												<A>
													<Strong>Angela Gray</Strong>
												</A>
												followed you
												<Span>&#9679;</Span>
											</P>
											<P>5m ago</P>
										</Wrapper>
									</Notification>
								</NotificationWrapper>
							</NotificationListItem>
							<NotificationListItem
								isRead={notificationsArr[2]?.isRead}
								onClick={() => {
									onNotificationClick(2);
								}}
							>
								<AvatarWrapper>
									<Image src={AvatarJacobThompson} alt="avatar" />
								</AvatarWrapper>
								<NotificationWrapper>
									<Notification>
										<Wrapper>
											<P>
												<A>
													<Strong>Jacob Thompson</Strong>
												</A>
												has joined your group
												<A>
													<Strong>Chess Club</Strong>
												</A>
												<Span>&#9679;</Span>
											</P>
											<P>1 day ago</P>
										</Wrapper>
									</Notification>
								</NotificationWrapper>
							</NotificationListItem>
							<NotificationListItem
								isRead={notificationsArr[3]?.isRead}
								onClick={() => {
									onNotificationClick(3);
								}}
							>
								<AvatarWrapper>
									<Image src={AvatarRizkyHasanuddin} alt="avatar" />
								</AvatarWrapper>
								<NotificationWrapper>
									<Notification>
										<Wrapper>
											<P>
												<A>
													<Strong>Rizky Hasanuddin</Strong>
												</A>
												sent you a private message
												<Span>&#9679;</Span>
											</P>
											<P>5 days ago</P>
										</Wrapper>
									</Notification>
									<Content>
										<A>
											<P>
												Hello, thanks for setting up the Chess Club. I've been a
												member for a few weeks now and I'm already having lots
												of fun and improving my game.
											</P>
										</A>
									</Content>
								</NotificationWrapper>
							</NotificationListItem>
							<NotificationListItem
								isRead={notificationsArr[4]?.isRead}
								onClick={() => {
									onNotificationClick(4);
								}}
							>
								<AvatarWrapper>
									<Image src={AvatarKimberlySmith} alt="avatar" />
								</AvatarWrapper>
								<NotificationWrapper>
									<Notification>
										<Wrapper>
											<P>
												<A>
													<Strong>Kimberly Smith</Strong>
												</A>
												commented on your picture
												<Span>&#9679;</Span>
											</P>
											<P>1 week ago</P>
										</Wrapper>
										<InlineContent>
											<A>
												<ImageWrapper>
													<Image src={ImageChess} alt="content" />
												</ImageWrapper>
											</A>
										</InlineContent>
									</Notification>
								</NotificationWrapper>
							</NotificationListItem>
							<NotificationListItem
								isRead={notificationsArr[5]?.isRead}
								onClick={() => {
									onNotificationClick(5);
								}}
							>
								<AvatarWrapper>
									<Image src={AvatarNathanPeterson} alt="avatar" />
								</AvatarWrapper>
								<NotificationWrapper>
									<Notification>
										<Wrapper>
											<P>
												<A>
													<Strong>Nathan Peterson</Strong>
												</A>
												reacted to your recent post
												<A>
													<Strong>
														5 end-game strategies to increase your win rate
													</Strong>
												</A>
												<Span>&#9679;</Span>
											</P>
											<P>2 weeks ago</P>
										</Wrapper>
									</Notification>
								</NotificationWrapper>
							</NotificationListItem>
							<NotificationListItem
								isRead={notificationsArr[6]?.isRead}
								onClick={() => {
									onNotificationClick(6);
								}}
							>
								<AvatarWrapper>
									<Image src={AvatarAnnaKim} alt="avatar" />
								</AvatarWrapper>
								<NotificationWrapper>
									<Notification>
										<Wrapper>
											<P>
												<A>
													<Strong>Anna Kim</Strong>
												</A>
												left the group
												<A>
													<Strong>Chess Club</Strong>
												</A>
												<Span>&#9679;</Span>
											</P>
											<P>2 weeks ago</P>
										</Wrapper>
									</Notification>
								</NotificationWrapper>
							</NotificationListItem>
						</NotificationList>
					</NotificationsWrapper>
				</Main>
			</Layout>
		</Theme>
	);
};

export default NotificationsPage;
