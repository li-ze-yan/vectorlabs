import { createCookie } from '@remix-run/node'

const cookie = createCookie('color-scheme', {
	maxAge: 34560000,
	sameSite: 'lax',
})

export type ColorTheme = 'dark' | 'light' | 'system'

/**
 * @param colorTheme 传入的模式
 */
export function serializeColorTheme(colorTheme: ColorTheme) {
	const eatCookie = colorTheme === 'system'
	if (eatCookie) {
		return cookie.serialize({}, { expires: new Date(0), maxAge: 0 })
	} else {
		return cookie.serialize({ colorTheme })
	}
}

/**
 * @param formValue 传入的模式
 * @returns Boolean
 */
export const validateColorTheme = (formValue: any): formValue is ColorTheme => {
	return formValue === 'dark' || formValue === 'light' || formValue === 'system'
}

/**
 * @param request 请求
 * @returns 返回当前的模式
 * @description 解析当前的模式，如果没有则返回系统模式
 */
export const parseColorTheme = async (request: Request) => {
	const header = request.headers.get('Cookie')
	const values = await cookie.parse(header)

	const colorTheme = values?.colorTheme

	if (validateColorTheme(colorTheme)) {
		// not sure why type narrowing isn't working here
		return colorTheme
	}
	return 'system'
}
