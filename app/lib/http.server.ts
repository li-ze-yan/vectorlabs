import { redirect } from '@remix-run/react'

/**
 *
 * @param to 目标url
 * @param init 响应的初始化信息
 * @description 安全重定向
 */
export function safeRedirect(to: FormDataEntryValue | string | null | undefined, init?: number | ResponseInit) {
	if (!to || typeof to !== 'string' || !to.startsWith('/') || to.startsWith('//')) {
		to = '/'
	}
	return redirect(to, init)
}

/**
 * @param request 请求
 * @description 移除请求的尾部斜杠
 */
export const removeTrailingSlashes = (request: Request) => {
	const url = new URL(request.url)
	if (url.pathname.endsWith('/') && url.pathname !== '/') {
		throw redirect(url.pathname.slice(0, -1) + url.search)
	}
}

/**
 * @param request 请求
 * @description 查看当前的环境
 */
export const isProductionHost = (request: Request) => {
	return 'remix.run' === request.headers.get('host')
}
