const PRIMARY = {
	1: 'hsl(356, 100%, 66%)', //Light red (CTA text)
	2: 'hsl(355, 100%, 74%)', //Very light red (CTA hover background)
	3: 'hsl(208, 49%, 24%)', //Very dark blue (headings)
};

const NEUTRAL = {
	1: 'hsl(0, 0%, 100%)', //White (text)
	2: 'hsl(240, 2%, 79%)', //Grayish blue (footer text)
	3: 'hsl(207, 13%, 34%)', //Very dark grayish blue (body copy)
	4: 'hsl(240, 10%, 16%)', //Very dark black blue (footer background)
};

const GRADIENTS = {
	1: 'linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))', //Background gradient - Intro/CTA mobile nav (Very light red, Light red)
	2: 'linear-gradient(90deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))', //Background gradient - body (Very dark gray blue, Very dark desaturated blue)
};

const PALLETE = {
	primary: PRIMARY,
	neutral: NEUTRAL,
	gradients: GRADIENTS,
};

export default PALLETE;
