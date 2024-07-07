import svgToDataUri from 'mini-svg-data-uri'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	experimental: {
		optimizeUniversalDefaults: true,
	},
	content: ['./app/**/*.{js,jsx,ts,tsx,mjs,mdx,html}'],
	darkMode: 'selector',
	theme: {
		screens: {
			sm: '640px',
			'demo-sm': '720px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
			14: '14',
			15: '15',
			16: '16',
		},
		extend: {
			colors: {
				code: {
					highlight: 'rgb(125 211 252 / 0.1)',
				},
				secondary: '#aaa6c3',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
				source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
				'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
			},
			spacing: {
				18: '4.5rem',
				full: '100%',
			},
			maxWidth: {
				'8xl': '90rem',
			},
			keyframes: {
				'flash-code': {
					'0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
					'100%': { backgroundColor: 'transparent' },
				},
			},
			animation: {
				'flash-code': 'flash-code 1s forwards',
				'flash-code-slow': 'flash-code 2s forwards',
			},
		},
	},
	plugins: [
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
			)

			matchUtilities(
				{
					highlight: (value: any) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
			)
		},
	],
} satisfies Config

const flattenColorPalette = (colors: { [key: string]: any }): { [key: string]: string } =>
	Object.assign(
		{},
		...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(([color, values]) =>
			typeof values == 'object'
				? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
						[color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
					}))
				: [
						{
							[`${color}`]: values,
						},
					],
		),
	)
