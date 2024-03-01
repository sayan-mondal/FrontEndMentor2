import {
	Container,
	AvatarWrapper,
	Avatar,
	TestimonialContent,
	UserWrapper,
	Name,
	Designation,
} from './UiElements';

const Testimonial = ({ testimonialData }) => {
	return (
		<Container>
			<AvatarWrapper>
				<Avatar src={testimonialData.user.image} alt="user-image" />
			</AvatarWrapper>
			<TestimonialContent>{testimonialData.testimonial}</TestimonialContent>
			<UserWrapper>
				<Name>{testimonialData.user.name}</Name>
				<Designation>{testimonialData.user.designation}</Designation>
			</UserWrapper>
		</Container>
	);
};

export default Testimonial;
