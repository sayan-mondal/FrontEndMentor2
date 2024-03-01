import IconFacebook from '../assets/images/icon-facebook.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconYoutube from '../assets/images/icon-youtube.svg';

export const getPlatformData = (platform) => {
	if (platform === 'facebook')
		return {
			color: 'var(--clr-primary-3)',
			icon: IconFacebook,
		};
	if (platform === 'twitter')
		return {
			color: 'var(--clr-primary-4)',
			icon: IconTwitter,
		};
	if (platform === 'instagram')
		return {
			color: 'var(--clr-gradient-1)',
			icon: IconInstagram,
		};
	if (platform === 'youtube')
		return {
			color: 'var(--clr-primary-7)',
			icon: IconYoutube,
		};
};
