import { useNavigation, useRouteLoaderData } from '@remix-run/react'
import { ColorScheme } from '~/lib/color-scheme.server'

export const useTheme = () => {
	const rootLoaderData = useRouteLoaderData<any>('root')
	const rootColorScheme = rootLoaderData?.colorScheme ?? 'system'

	const { formData } = useNavigation()
	const optimisticColorScheme = formData?.has('colorScheme') ? (formData.get('colorScheme') as ColorScheme) : null
	return optimisticColorScheme || rootColorScheme
}
