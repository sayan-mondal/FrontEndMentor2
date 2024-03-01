import Testimonial from './components/Testimonial';
import { Container, Title, TestimonialsWrapper } from './components/UiElements';

const TestimonialSection = ({ testimonialsData }) => {
	return (
		<Container>
			<Title>Client testimonials</Title>
			<TestimonialsWrapper>
				{testimonialsData.map((testimonialData) => (
					<Testimonial
						key={testimonialData.id}
						testimonialData={testimonialData}
					/>
				))}
			</TestimonialsWrapper>
		</Container>
	);
};

export default TestimonialSection;
