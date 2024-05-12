const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4287f5',
				// color 111111 con 50% de opacidad
				gray: 'rgba(17, 17, 17, 0.5)'
			},
			sans: {
				fontFamily: ['Montserrat', ...defaultTheme.fontFamily.sans]
			},
			screens: {
				medium: '468px',
				mobile: '411px',
				tablet: '721px',
				laptop: '890px'
			}
		},
	},
	plugins: [],
}
