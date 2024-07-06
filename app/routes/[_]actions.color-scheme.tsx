import { type ActionFunctionArgs } from '@remix-run/node'
import { serializeColorTheme, validateColorTheme } from '~/lib/color-theme.server'
import { safeRedirect } from '~/lib/http.server'

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	const colorTheme = formData.get('colorTheme')
	if (!validateColorTheme(colorTheme)) {
		throw new Response('网站模式传递错误', { status: 400 })
	}
	// 重定向到之前的页面
	return safeRedirect(formData.get('returnTo'), {
		headers: { 'Set-Cookie': await serializeColorTheme(colorTheme) },
	})
}
