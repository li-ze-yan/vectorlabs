import { redirect } from '@remix-run/react'

/**
 *
 * @param to 目标url
 * @param init 响应的初始化信息
 */
export function safeRedirect(to: FormDataEntryValue | string | null | undefined, init?: number | ResponseInit) {
	if (!to || typeof to !== 'string' || !to.startsWith('/') || to.startsWith('//')) {
		to = '/'
	}
	return redirect(to, init)
}
