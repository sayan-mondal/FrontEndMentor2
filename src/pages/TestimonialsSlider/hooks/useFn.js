import { useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const TestimonialsData = [
	{
		id: 1,
		testimonial:
			'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
		user: {
			name: 'Tanya Sinclair',
			info: 'UX Engineer',
			image: require('../assets/images/image-tanya.jpg'),
		},
	},
	{
		id: 2,
		testimonial:
			'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
		user: {
			name: 'John Tarkpor',
			info: 'Junior Front-end Developer',
			image: require('../assets/images/image-john.jpg'),
		},
	},
];

const TestimonialDataInfo = {
	lastIndex: TestimonialsData.length - 1,
};

const useFn = () => {
	const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
	const animationControls = useAnimationControls();
	const animationDuration = 0.5;

	const animation = {
		variants: {
			visible: { opacity: 1 },
			hidden: { opacity: 0 },
			hideLeft: { opacity: 0, x: [null, -100] },
			hideRight: { opacity: 0, x: [null, 100] },
			visibleLeft: { opacity: 1, x: [100, 0] },
			visibleRight: { opacity: 1, x: [-100, 0] },
		},
		transition: { ease: 'easeInOut', duration: animationDuration },
	};

	useEffect(() => {
		if (direction === 0) {
			animationControls.start('visible');
			return;
		}

		direction > 0
			? animationControls.start('visibleLeft')
			: animationControls.start('visibleRight');
	}, [activeIndex, direction, animationControls]);

	const prevTestimonial = () => {
		animationControls.start('hideRight');
		setTimeout(() => {
			setActiveIndex(([curIndex, direction]) => [
				curIndex === 0 ? TestimonialDataInfo.lastIndex : curIndex - 1,
				-1,
			]);
		}, animationDuration * 1000);
	};

	const nextTestimonial = () => {
		animationControls.start('hideLeft');
		setTimeout(() => {
			setActiveIndex(([curIndex, direction]) => [
				curIndex === TestimonialDataInfo.lastIndex ? 0 : curIndex + 1,
				1,
			]);
		}, animationDuration * 1000);
	};

	return {
		TestimonialsData,
		activeIndex,
		animation,
		animationControls,
		prevTestimonial,
		nextTestimonial,
	};
};

export default useFn;
