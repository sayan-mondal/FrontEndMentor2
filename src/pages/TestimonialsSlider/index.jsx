import { ThemeProvider } from 'styled-components';
import {
	theme,
	GlobalStyles,
	Container,
	Content,
	TestimonialWrapper,
	Testimonial,
	UserWrapper,
	Name,
	Info,
	ImageWrapper,
	Image,
	ButtonsWrapper,
	Button,
	Icon,
} from './components/UiElements';
import IconPrev from './assets/images/icon-prev.svg';
import IconNext from './assets/images/icon-next.svg';
import './index.css';
import useFn from './hooks/useFn';

const TestimonialsSlider = () => {
	const {
		TestimonialsData,
		activeIndex,
		animation,
		animationControls,
		prevTestimonial,
		nextTestimonial,
	} = useFn();

	const swipeConfidenceThreshold = 10000;

	const swipePower = (offset, velocity) => {
		return Math.abs(offset) * velocity;
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<Content
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							nextTestimonial();
						} else if (swipe > swipeConfidenceThreshold) {
							prevTestimonial();
						}
					}}
				>
					<TestimonialWrapper>
						<Testimonial
							initial="hidden"
							animate={animationControls}
							variants={animation.variants}
							transition={animation.transition}
						>
							{TestimonialsData[activeIndex].testimonial}
						</Testimonial>
						<UserWrapper
							initial="hidden"
							animate={animationControls}
							variants={animation.variants}
							transition={animation.transition}
						>
							<Name>{TestimonialsData[activeIndex].user.name}</Name>
							<Info>{TestimonialsData[activeIndex].user.info}</Info>
						</UserWrapper>
					</TestimonialWrapper>
					<ImageWrapper>
						<Image
							src={TestimonialsData[activeIndex].user.image}
							alt="user-image"
							initial="hidden"
							animate={animationControls}
							variants={animation.variants}
							transition={animation.transition}
						/>
						<ButtonsWrapper>
							<Button onClick={prevTestimonial}>
								<Icon src={IconPrev} alt="icon-prev" />
							</Button>
							<Button onClick={nextTestimonial}>
								<Icon src={IconNext} alt="icon-next" />
							</Button>
						</ButtonsWrapper>
					</ImageWrapper>
				</Content>
			</Container>
		</ThemeProvider>
	);
};

export default TestimonialsSlider;
