import { useNavigation, useRouteLoaderData } from '@remix-run/react'
import { ColorTheme } from '~/lib/color-theme.server'
import type { loader as rootLoader } from '~/root'

export const useTheme = () => {
	const rootLoaderData = useRouteLoaderData<typeof rootLoader>('root')
	const rootColorTheme = rootLoaderData?.colorTheme ?? 'system'

	const { formData } = useNavigation()
	const optimisticColorTheme = formData?.has('colorTheme') ? (formData.get('colorTheme') as ColorTheme) : null
	return optimisticColorTheme || rootColorTheme
}
