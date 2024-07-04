import { type ActionFunctionArgs } from '@remix-run/node'
import { serializeColorScheme, validateColorScheme } from '~/lib/color-scheme.server'
import { safeRedirect } from '~/lib/http.server'

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	const colorScheme = formData.get('colorScheme')
	console.log('colorScheme', colorScheme)
	console.log("formData.get('returnTo')", formData.get('returnTo'))
	if (!validateColorScheme(colorScheme)) {
		throw new Response('网站模式传递错误', { status: 400 })
	}
	// 重定向到之前的页面
	return safeRedirect(formData.get('returnTo'), {
		headers: { 'Set-Cookie': await serializeColorScheme(colorScheme) },
	})
}
