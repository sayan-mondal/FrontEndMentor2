const PRIMARY = {
	common: {
		1: 'hsl(163, 72%, 41%)', //Lime Green
		2: 'hsl(356, 69%, 56%)', //Bright Red
		3: 'hsl(208, 92%, 53%)', //Facebook
		4: 'hsl(203, 89%, 53%)', //Twitter
		5: 'hsl(37, 97%, 70%)',
		6: 'hsl(329, 70%, 58%)',
		7: 'hsl(348, 97%, 39%)', //YouTube
	},
	dark: {
		8: 'hsl(210, 78%, 56%)',
		9: 'hsl(146, 68%, 55%)',
	},
	light: {
		8: 'hsl(230, 22%, 74%)',
		9: 'hsl(230 29% 67%)',
	},
};

const NEUTRAL = {
	dark: {
		1: 'hsl(230, 17%, 14%)', // Very Dark Blue
		2: 'hsl(232, 19%, 15%)', //Very Dark Blue (Top BG Pattern)
		3: 'hsl(228, 28%, 20%)', //Dark Desaturated Blue (Card BG)
		4: 'hsl(228, 34%, 66%)', //Desaturated Blue (Text)
		5: 'hsl(0, 0%, 100%)', // White
	},
	light: {
		1: 'hsl(0, 0%, 100%)', // White
		2: 'hsl(225, 100%, 98%)', //Very Pale Blue (Top BG Pattern)
		3: 'hsl(227, 47%, 96%)', //Light Grayish Blue (Card BG)
		4: 'hsl(228, 12%, 44%)', //Dark Grayish Blue (Text)
		5: 'hsl(230, 17%, 14%)', // Very Dark Blue
	},
};

const GRADIENTS = {
	common: {
		1: `linear-gradient(90deg, ${PRIMARY.common[5]}, ${PRIMARY.common[6]})`, //Instagram
	},
	dark: {
		2: `linear-gradient(90deg, ${PRIMARY.dark[8]}, ${PRIMARY.dark[9]})`, //Toggle
	},
	light: {
		2: `linear-gradient(90deg, ${PRIMARY.light[9]}, ${PRIMARY.light[8]})`, //Toggle
	},
};

const pallete = {
	primary: PRIMARY,
	neutral: NEUTRAL,
	gradients: GRADIENTS,
};

export default pallete;
