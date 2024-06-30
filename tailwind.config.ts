import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	experimental: {
		optimizeUniversalDefaults: true,
	},
	content: ['./app/**/*.{js,jsx,ts,tsx,mjs,mdx,html}'],
	darkMode: 'class',
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
	plugins: [],
} satisfies Config
