/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				image: "url('/src/assets/bg-image1.jpg')",
			},
		},
	},
	plugins: [],
}
