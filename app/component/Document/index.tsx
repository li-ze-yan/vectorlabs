import { Links, Meta, Scripts, ScrollRestoration, useMatches } from '@remix-run/react'
import clsx from 'clsx'
import { useTheme } from '~/hooks'
import { ColorThemeScript } from '../ColorThemeScript'
import { DocumentProps } from './type'

export const Document = ({ children, title, forceDark, darkBg, noIndex }: DocumentProps) => {
	const colorTheme = useTheme()
	const matches = useMatches()
	const isDocsPage = !!matches.find((match) => match.id.startsWith('routes/docs'))

	return (
		<html
			lang="en"
			className={clsx({
				dark: forceDark || colorTheme === 'dark',
				'scroll-pt-[6rem] lg:scroll-pt-[4rem]': isDocsPage,
			})}
			data-theme={forceDark ? 'dark' : colorTheme}
		>
			<head>
				<ColorThemeScript forceConsistentTheme={forceDark} />
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#121212" />
				<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
				{noIndex && <meta name="robots" content="noindex" />}
				<Links />
				<Meta />
				{title && <title data-title-override="">{title}</title>}
			</head>

			<body
				className={clsx(
					'flex min-h-screen w-full flex-col overflow-x-hidden antialiased selection:bg-blue-200 selection:text-black dark:selection:bg-blue-800 dark:selection:text-white',
					forceDark
						? [darkBg || 'bg-gray-900', 'text-gray-200']
						: 'bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200',
				)}
			>
				{/* <GlobalLoading /> */}
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}
