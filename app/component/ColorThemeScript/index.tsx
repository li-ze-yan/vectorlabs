import { useEffect, useMemo } from 'react'
import { useTheme } from '~/hooks'

export const ColorThemeScript = ({ forceConsistentTheme }: { forceConsistentTheme?: boolean }) => {
	return forceConsistentTheme ? null : <ColorSchemeScriptImpl />
}

const ColorSchemeScriptImpl = () => {
	const colorTheme = useTheme()
	const script = useMemo(
		() => `
			let colorTheme = ${JSON.stringify(colorTheme)};
        if (colorTheme === "system") {
          let media = window.matchMedia("(prefers-color-scheme: dark)")
          if (media.matches) document.documentElement.classList.add("dark");
        }
	`,
		[],
	)

	useEffect(() => {
		switch (colorTheme) {
			case 'light':
				document.documentElement.classList.remove('dark')
				break
			case 'dark':
				document.documentElement.classList.add('dark')
				break
			case 'system':
				const media = window.matchMedia('(prefers-color-scheme: dark)')
				syncColorScheme(media)
				media.addEventListener('change', syncColorScheme)
				return () => media.removeEventListener('change', syncColorScheme)
			default:
				console.error('不支持的网站模式:', colorTheme)
		}
	}, [colorTheme])

	useEffect(() => {
		if (colorTheme === 'system') {
			const media = window.matchMedia('(prefers-color-scheme: dark)')
			syncColorScheme(media)
		}
	})

	return <script dangerouslySetInnerHTML={{ __html: script }} />
}

const syncColorScheme = (media: MediaQueryList | MediaQueryListEvent) => {
	if (media.matches) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}
