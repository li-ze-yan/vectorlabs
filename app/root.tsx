import { json, LoaderFunctionArgs } from '@remix-run/node'
import { Outlet, useLoaderData, useMatches } from '@remix-run/react'
import { Document } from '~/component'
import '~/css/tailwind.css'
import { parseColorTheme } from '~/lib/color-theme.server'
import { isProductionHost, removeTrailingSlashes } from '~/lib/http.server'
// import iconsHref from '/img/common/icons.svg'

export const loader = async ({ request }: LoaderFunctionArgs) => {
	removeTrailingSlashes(request)
	const isDevHost = !isProductionHost(request)
	const url = new URL(request.url)
	const colorTheme = await parseColorTheme(request)

	return json(
		{
			colorTheme,
			host: url.host,
			isProductionHost: !isDevHost,
			noIndex: isDevHost,
		},
		{
			headers: {
				Vary: 'Cookie',
			},
		},
	)
}

export default function App() {
	const matches = useMatches()
	const { noIndex } = useLoaderData<typeof loader>()
	const forceDark = matches.some(({ handle }) => {
		if (handle && typeof handle === 'object' && 'forceDark' in handle) {
			return handle.forceDark
		}
		return false
	})
	return (
		<Document noIndex={noIndex} forceDark={forceDark} isDev={process.env.NODE_ENV === 'development'}>
			<Outlet />
		</Document>
	)
}
