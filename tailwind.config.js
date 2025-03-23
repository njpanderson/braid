/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./resources/views/**/*.blade.php",
		"./resources/js/**/*.js"
	],
	darkMode: 'selector',
	safelist: ['shiki'],
	theme: {
		extend: {
			colors: {
				primary: getColours('primary'),
				accent: getColours('accent'),
				neutral: getColours('neutral'),
			},
			fontFamily: {
				'lato': 'Lato, sans-serif'
			},
			boxShadow: {
				'frame': '-10px 0 30px -5px rgba(0, 0, 0, 0.3)',
			}
		},
	},
}

export default config;

function getColours(name) {
	let colours = {};

	for (let a = 100; a <= 900; a += 100) {
		colours[a] = `rgba(var(--color-${name}-${a}), <alpha-value>)`;
	}

	return colours;
}
