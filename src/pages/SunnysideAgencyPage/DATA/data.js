import ImageTransformDesktop from '../assets/images/desktop/image-transform.jpg';
import ImageTransformMobile from '../assets/images/mobile/image-transform.jpg';
import ImageStandOutDesktop from '../assets/images/desktop/image-stand-out.jpg';
import ImageStandOutMobile from '../assets/images/mobile/image-stand-out.jpg';
import ImageGraphicDesignDesktop from '../assets/images/desktop/image-graphic-design.jpg';
import ImageGraphicDesignMobile from '../assets/images/mobile/image-graphic-design.jpg';
import ImagePhotographyDesktop from '../assets/images/desktop/image-photography.jpg';
import ImagePhotographyMobile from '../assets/images/mobile/image-photography.jpg';
import ImageEmily from '../assets/images/image-emily.jpg';
import ImageThomas from '../assets/images/image-thomas.jpg';
import ImageJennie from '../assets/images/image-jennie.jpg';
import ImageGalleryMilkbottlesDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import ImageGalleryMilkbottlesMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import ImageGalleryOrangeDesktop from '../assets/images/desktop/image-gallery-orange.jpg';
import ImageGalleryOrangeMobile from '../assets/images/mobile/image-gallery-orange.jpg';
import ImageGalleryConeDesktop from '../assets/images/desktop/image-gallery-cone.jpg';
import ImageGalleryConeMobile from '../assets/images/mobile/image-gallery-cone.jpg';
import ImageGallerySugarcubesDesktop from '../assets/images/desktop/image-gallery-sugarcubes.jpg';
import ImageGallerySugarcubesMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';

const DATA = {
	about: [
		{
			id: 1,
			title: 'Transform your brand',
			subtitle:
				'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
			image: {
				desktop: ImageTransformDesktop,
				mobile: ImageTransformMobile,
			},
			color: 'hsl(50, 100%, 50%)',
		},
		{
			id: 2,
			title: 'Stand out to the right audience',
			subtitle:
				'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
			image: {
				desktop: ImageStandOutDesktop,
				mobile: ImageStandOutMobile,
			},
			color: 'hsl(7, 100%, 70%)',
		},
	],
	services: [
		{
			id: 1,
			title: 'Graphic design',
			subtitle:
				'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
			image: {
				desktop: ImageGraphicDesignDesktop,
				mobile: ImageGraphicDesignMobile,
			},
		},
		{
			id: 2,
			title: 'Photography',
			subtitle:
				'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
			image: {
				desktop: ImagePhotographyDesktop,
				mobile: ImagePhotographyMobile,
			},
		},
	],
	testimonials: [
		{
			id: 1,
			user: {
				name: 'Emily R.',
				designation: 'Marketing Director',
				image: ImageEmily,
			},
			testimonial:
				'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
		},
		{
			id: 2,
			user: {
				name: 'Thomas S.',
				designation: 'Chief Operating Officer',
				image: ImageThomas,
			},
			testimonial:
				'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
		},
		{
			id: 3,
			user: {
				name: 'Jennie F.',
				designation: 'Business Owner',
				image: ImageJennie,
			},
			testimonial:
				'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
		},
	],
	gallery: [
		{
			id: 1,
			image: {
				desktop: ImageGalleryMilkbottlesDesktop,
				mobile: ImageGalleryMilkbottlesMobile,
			},
		},
		{
			id: 2,
			image: {
				desktop: ImageGalleryOrangeDesktop,
				mobile: ImageGalleryOrangeMobile,
			},
		},
		{
			id: 3,
			image: {
				desktop: ImageGalleryConeDesktop,
				mobile: ImageGalleryConeMobile,
			},
		},
		{
			id: 4,
			image: {
				desktop: ImageGallerySugarcubesDesktop,
				mobile: ImageGallerySugarcubesMobile,
			},
		},
	],
};

export default DATA;
