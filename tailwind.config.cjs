/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				roboto: "'Roboto', sans-serif",
				poppins: "'Poppins', sans-serif;"
			}
		},
	},
	plugins: [],
}