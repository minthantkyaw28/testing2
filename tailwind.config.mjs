/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/tw-elements/dist/js/**/*.js",
	'./node_modules/flowbite/**/*.js'],
	
	theme: {
		extend: {},
	},
	plugins: [require("tw-elements/dist/plugin.cjs"),require('flowbite/plugin')],
}
