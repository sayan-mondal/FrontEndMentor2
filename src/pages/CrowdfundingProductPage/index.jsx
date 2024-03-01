import { useState, useRef } from 'react';
import Theme from './Theme';
import Header from './components/Header';
import {
	Layout,
	Main,
	ImageWrapper,
	Picture,
	Source,
	Image,
	Content,
	ProjectTitleSection,
	LogoWrapper,
	Logo,
	ProjectTitle,
	Subtitle,
	ProjectCTAWrapper,
	ProjectCTAButton,
	BookMarkWrapper,
	IconWrapper,
	Icon,
	Text,
	ProjectStatsSection,
	StatsList,
	StatsListItem,
	StatWrapper,
	Stat,
	StatDetails,
	CustomProgressBar,
	ProjectDetailsSection,
	AboutWrapper,
	AboutTitle,
	About,
	PledgeList,
	PledgeWrapper,
	PledgeHeadingWrapper,
	PledgeReward,
	PledgeDetail1,
	PledgeDetail2,
	PledgeCTAWrapper,
	PledgeCTADetail,
	PledgeCTAButton,
	Modal,
	ModalWrapper,
	ModalHeader,
	ModalIconWrapper,
	ModalIcon,
	ModalContent,
	ModalContentTitleWrapper,
	ModalContentTitle,
	ModalContentSubtitle,
	ModalPledgeList,
	ModalPledgeListItem,
	ModalPledgeWrapper,
	ModalPledgeDetailsWrapper,
	RadioInput,
	ModalPledgeHeader,
	ModalPledgeReward,
	ModalPledgeDetail1,
	ModalPledgeDetail2,
	ModalPledgeCTADetail,
	ModalPledgeForm,
	PledgeInput,
	AmountInputWrapper,
	AmountInput,
	FormButton,
	ModalFormSubmittedWrapper,
	ModalFormSubmittedTitle,
	ModalFormSubmittedSubtitle,
	ModalFormSubmittedButton,
} from './components/uiElements';
import ImageDesktop from './assets/images/image-hero-desktop.jpg';
import ImageMobile from './assets/images/image-hero-mobile.jpg';
import LogoMastercraft from './assets/images/logo-mastercraft.svg';
import IconBookmark from './assets/images/icon-bookmark.svg';
import IconCloseModal from './assets/images/icon-close-modal.svg';
import IconCheck from './assets/images/icon-check.svg';
import './index.css';

const CrowdfundingProductPage = () => {
	const [showBackdrop, setShowBackdrop] = useState(null);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [checked, setChecked] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [pledgeInput, setPledgeInput] = useState('');
	const [amountInput, setAmountInput] = useState('');
	const modalPledgeListItemRef = useRef(null);

	const openModal = (id = null) => {
		if (!id) window.scrollTo(0, 0);
		else {
			const top = 95;
			const elementHeight = modalPledgeListItemRef.current?.clientHeight;

			if (id === 1) window.scrollTo(0, top + elementHeight);
			if (id === 2) window.scrollTo(0, top + 2 * elementHeight + 16);
			if (id === 3) window.scrollTo(0, top + 2 * (elementHeight + 16));

			setChecked(id);
		}
		setIsModalOpen(true);
		setShowBackdrop(1);
	};

	const closeModal = () => {
		checked !== null && setChecked(null);
		isFormSubmitted === true && setIsFormSubmitted(false);
		setIsModalOpen(false);
		setShowBackdrop(null);
		setPledgeInput('');
		setAmountInput('');
	};

	const handleBookmarkClick = () => {
		setIsBookmarked((curVal) => !curVal);
	};

	const handleOnRadioInputChange = (id) => {
		setChecked(id);
		setPledgeInput('');
		setAmountInput('');
	};

	const handleInputChange = (e, inputId) => {
		if (inputId === 1) setPledgeInput(e.target.value);
		if (inputId === 2) setAmountInput(e.target.value);
	};

	const handleFormSubmit = () => {
		const formData = { pledgeInput, amountInput };

		console.log(formData);

		setIsFormSubmitted(true);
		setPledgeInput('');
		setAmountInput('');
	};

	const handleModalButton = () => {
		setIsFormSubmitted(false);
		closeModal();
	};

	const handleBackdropClick = () => {
		if (isModalOpen) closeModal();
	};

	return (
		<Theme
			showBackdrop={showBackdrop}
			handleBackdropClick={handleBackdropClick}
		>
			<Layout>
				<Header setShowBackdrop={setShowBackdrop} />
				<Main>
					<ImageWrapper>
						<Picture>
							<Source srcSet={ImageMobile} alt="image-mobile" />
							<Image src={ImageDesktop} alt="image-desktop" />
						</Picture>
					</ImageWrapper>
					<Content>
						<ProjectTitleSection>
							<LogoWrapper>
								<Logo src={LogoMastercraft} alt="logo" />
							</LogoWrapper>
							<ProjectTitle>Mastercraft Bamboo Monitor Riser</ProjectTitle>
							<Subtitle>
								A beautiful & handcrafted monitor stand to reduce neck and eye
								strain.
							</Subtitle>
							<ProjectCTAWrapper>
								<ProjectCTAButton
									onClick={() => {
										openModal();
									}}
								>
									Back this project
								</ProjectCTAButton>
								<BookMarkWrapper
									isBookmarked={isBookmarked}
									onClick={handleBookmarkClick}
								>
									<IconWrapper>
										<Icon src={IconBookmark} alt="icon-bookmark" />
									</IconWrapper>
									<Text>Bookmark</Text>
								</BookMarkWrapper>
							</ProjectCTAWrapper>
						</ProjectTitleSection>
						<ProjectStatsSection>
							<StatsList>
								<StatsListItem>
									<StatWrapper>
										<Stat>$89,914</Stat>
										<StatDetails>of $100,000 backed</StatDetails>
									</StatWrapper>
								</StatsListItem>
								<StatsListItem>
									<StatWrapper>
										<Stat>5,007</Stat>
										<StatDetails>total backers</StatDetails>
									</StatWrapper>
								</StatsListItem>
								<StatsListItem>
									<StatWrapper>
										<Stat>56</Stat>
										<StatDetails>days left</StatDetails>
									</StatWrapper>
								</StatsListItem>
							</StatsList>
							<CustomProgressBar value={89914 / 100000} />
						</ProjectStatsSection>
						<ProjectDetailsSection>
							<AboutWrapper>
								<AboutTitle>About this project</AboutTitle>
								<About>
									The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
									platform that elevates your screen to a more comfortable
									viewing height. Placing your monitor at eye level has the
									potential to improve your posture and make you more
									comfortable while at work, helping you stay focused on the
									task at hand.
								</About>
								<About>
									Featuring artisan craftsmanship, the simplicity of design
									creates extra desk space below your computer to allow
									notepads, pens, and USB sticks to be stored under the stand.
								</About>
							</AboutWrapper>
							<PledgeList>
								<PledgeWrapper>
									<PledgeHeadingWrapper>
										<PledgeReward>Bamboo Stand</PledgeReward>
										<PledgeDetail1>Pledge $25 or more</PledgeDetail1>
									</PledgeHeadingWrapper>
									<PledgeDetail2>
										You get an ergonomic stand made of natural bamboo. You've
										helped us launch our promotional campaign, and you’ll be
										added to a special Backer member list.
									</PledgeDetail2>
									<PledgeCTAWrapper>
										<PledgeCTADetail>
											<b>101</b> left
										</PledgeCTADetail>
										<PledgeCTAButton
											onClick={() => {
												openModal(1);
											}}
										>
											Select Reward
										</PledgeCTAButton>
									</PledgeCTAWrapper>
								</PledgeWrapper>
								<PledgeWrapper>
									<PledgeHeadingWrapper>
										<PledgeReward>Black Edition Stand</PledgeReward>
										<PledgeDetail1>Pledge $75 or more</PledgeDetail1>
									</PledgeHeadingWrapper>
									<PledgeDetail2>
										You get a Black Special Edition computer stand and a
										personal thank you. You’ll be added to our Backer member
										list. Shipping is included.
									</PledgeDetail2>
									<PledgeCTAWrapper>
										<PledgeCTADetail>
											<b>64</b> left
										</PledgeCTADetail>
										<PledgeCTAButton
											onClick={() => {
												openModal(2);
											}}
										>
											Select Reward
										</PledgeCTAButton>
									</PledgeCTAWrapper>
								</PledgeWrapper>
								<PledgeWrapper disabled>
									<PledgeHeadingWrapper>
										<PledgeReward>Mahogany Special Edition</PledgeReward>
										<PledgeDetail1>Pledge $200 or more</PledgeDetail1>
									</PledgeHeadingWrapper>
									<PledgeDetail2>
										You get two Special Edition Mahogany stands, a Backer
										T-Shirt, and a personal thank you. You’ll be added to our
										Backer member list. Shipping is included.
									</PledgeDetail2>
									<PledgeCTAWrapper>
										<PledgeCTADetail>
											<b>0</b> left
										</PledgeCTADetail>
										<PledgeCTAButton
											onClick={() => {
												openModal(3);
											}}
										>
											Out of Stock
										</PledgeCTAButton>
									</PledgeCTAWrapper>
								</PledgeWrapper>
							</PledgeList>
						</ProjectDetailsSection>
					</Content>
					<Modal isModalOpen={isModalOpen} checked={checked}>
						<ModalWrapper>
							<ModalHeader>
								<ModalIconWrapper onClick={closeModal}>
									<ModalIcon src={IconCloseModal} alt="icon-close-modal" />
								</ModalIconWrapper>
							</ModalHeader>
							{!isFormSubmitted ? (
								<ModalContent>
									<ModalContentTitleWrapper>
										<ModalContentTitle>Back this project</ModalContentTitle>
										<ModalContentSubtitle>
											Want to support us in bringing Mastercraft Bamboo Monitor
											Riser out in the world?
										</ModalContentSubtitle>
									</ModalContentTitleWrapper>
									<ModalPledgeList>
										<ModalPledgeListItem ref={modalPledgeListItemRef}>
											<ModalPledgeWrapper
												checked={checked === 0}
												htmlFor="pledge0"
											>
												<ModalPledgeDetailsWrapper>
													<RadioInput
														id="pledge0"
														name="pledge"
														checked={checked === 0}
														onChange={() => {
															handleOnRadioInputChange(0);
														}}
													/>
													<ModalPledgeHeader>
														<ModalPledgeReward>
															Pledge with no reward
														</ModalPledgeReward>
														{/* <ModalPledgeDetail1></ModalPledgeDetail1> */}
													</ModalPledgeHeader>
													<ModalPledgeDetail2>
														Choose to support us without a reward if you simply
														believe in our project. As a backer, you will be
														signed up to receive product updates via email.
													</ModalPledgeDetail2>
													{/* <ModalPledgeCTADetail></ModalPledgeCTADetail> */}
												</ModalPledgeDetailsWrapper>
												<ModalPledgeForm onSubmit={handleFormSubmit}>
													<PledgeInput
														onChange={(e) => {
															handleInputChange(e, 1);
														}}
													/>
													<AmountInputWrapper
														showBefore={amountInput.length > 0}
													>
														<AmountInput
															onChange={(e) => {
																handleInputChange(e, 2);
															}}
														/>
													</AmountInputWrapper>
													<FormButton>Continue</FormButton>
												</ModalPledgeForm>
											</ModalPledgeWrapper>
										</ModalPledgeListItem>
										<ModalPledgeListItem>
											<ModalPledgeWrapper
												checked={checked === 1}
												htmlFor="pledge1"
											>
												<ModalPledgeDetailsWrapper>
													<RadioInput
														id="pledge1"
														name="pledge"
														checked={checked === 1}
														onChange={() => {
															handleOnRadioInputChange(1);
														}}
													/>
													<ModalPledgeHeader>
														<ModalPledgeReward>Bamboo Stand</ModalPledgeReward>
														<ModalPledgeDetail1>
															Pledge $25 or more
														</ModalPledgeDetail1>
													</ModalPledgeHeader>
													<ModalPledgeDetail2>
														You get an ergonomic stand made of natural bamboo.
														You've helped us launch our promotional campaign,
														and you’ll be added to a special Backer member list.
													</ModalPledgeDetail2>
													<ModalPledgeCTADetail>
														<b>101</b> left
													</ModalPledgeCTADetail>
												</ModalPledgeDetailsWrapper>
												<ModalPledgeForm onSubmit={handleFormSubmit}>
													<PledgeInput
														onChange={(e) => {
															handleInputChange(e, 1);
														}}
													/>
													<AmountInputWrapper
														showBefore={amountInput.length > 0}
													>
														<AmountInput
															onChange={(e) => {
																handleInputChange(e, 2);
															}}
														/>
													</AmountInputWrapper>
													<FormButton>Continue</FormButton>
												</ModalPledgeForm>
											</ModalPledgeWrapper>
										</ModalPledgeListItem>
										<ModalPledgeListItem>
											<ModalPledgeWrapper
												checked={checked === 2}
												htmlFor="pledge2"
											>
												<ModalPledgeDetailsWrapper>
													<RadioInput
														id="pledge2"
														name="pledge"
														checked={checked === 2}
														onChange={() => {
															handleOnRadioInputChange(2);
														}}
													/>
													<ModalPledgeHeader>
														<ModalPledgeReward>
															Black Edition Stand
														</ModalPledgeReward>
														<ModalPledgeDetail1>
															Pledge $75 or more
														</ModalPledgeDetail1>
													</ModalPledgeHeader>
													<ModalPledgeDetail2>
														You get a Black Special Edition computer stand and a
														personal thank you. You’ll be added to our Backer
														member list. Shipping is included.
													</ModalPledgeDetail2>
													<ModalPledgeCTADetail>
														<b>64</b> left
													</ModalPledgeCTADetail>
												</ModalPledgeDetailsWrapper>
												<ModalPledgeForm onSubmit={handleFormSubmit}>
													<PledgeInput
														onChange={(e) => {
															handleInputChange(e, 1);
														}}
													/>
													<AmountInputWrapper
														showBefore={amountInput.length > 0}
													>
														<AmountInput
															onChange={(e) => {
																handleInputChange(e, 2);
															}}
														/>
													</AmountInputWrapper>
													<FormButton>Continue</FormButton>
												</ModalPledgeForm>
											</ModalPledgeWrapper>
										</ModalPledgeListItem>
										<ModalPledgeListItem>
											<ModalPledgeWrapper
												disabled
												checked={checked === 3}
												htmlFor="pledge3"
											>
												<ModalPledgeDetailsWrapper>
													<RadioInput
														id="pledge3"
														name="pledge"
														checked={checked === 3}
														onChange={() => {
															handleOnRadioInputChange(3);
														}}
													/>
													<ModalPledgeHeader>
														<ModalPledgeReward>
															Mahogany Special Edition
														</ModalPledgeReward>
														<ModalPledgeDetail1>
															Pledge $200 or more
														</ModalPledgeDetail1>
													</ModalPledgeHeader>
													<ModalPledgeDetail2>
														You get two Special Edition Mahogany stands, a
														Backer T-Shirt, and a personal thank you. You’ll be
														added to our Backer member list. Shipping is
														included.
													</ModalPledgeDetail2>
													<ModalPledgeCTADetail>
														<b>0</b> left
													</ModalPledgeCTADetail>
												</ModalPledgeDetailsWrapper>
												<ModalPledgeForm onSubmit={handleFormSubmit}>
													<PledgeInput
														onChange={(e) => {
															handleInputChange(e, 1);
														}}
													/>
													<AmountInputWrapper
														showBefore={amountInput.length > 0}
													>
														<AmountInput
															onChange={(e) => {
																handleInputChange(e, 2);
															}}
														/>
													</AmountInputWrapper>
													<FormButton>Continue</FormButton>
												</ModalPledgeForm>
											</ModalPledgeWrapper>
										</ModalPledgeListItem>
									</ModalPledgeList>
								</ModalContent>
							) : (
								<ModalContent>
									<ModalFormSubmittedWrapper>
										<ModalIconWrapper>
											<ModalIcon src={IconCheck} alt="icon-check" />
										</ModalIconWrapper>
										<ModalFormSubmittedTitle>
											Thanks for your support!
										</ModalFormSubmittedTitle>
										<ModalFormSubmittedSubtitle>
											Your pledge brings us one step closer to sharing
											Mastercraft Bamboo Monitor Riser worldwide. You will get
											an email once our campaign is completed.
										</ModalFormSubmittedSubtitle>
										<ModalFormSubmittedButton onClick={handleModalButton}>
											Got it!
										</ModalFormSubmittedButton>
									</ModalFormSubmittedWrapper>
								</ModalContent>
							)}
						</ModalWrapper>
					</Modal>
				</Main>
			</Layout>
		</Theme>
	);
};

export default CrowdfundingProductPage;
