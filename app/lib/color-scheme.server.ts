import { createCookie } from '@remix-run/node'

const cookie = createCookie('color-scheme', {
	maxAge: 34560000,
	sameSite: 'lax',
})

export type ColorScheme = 'dark' | 'light' | 'system'

/**
 * @param colorScheme 传入的模式
 */
export function serializeColorScheme(colorScheme: ColorScheme) {
	const eatCookie = colorScheme === 'system'
	if (eatCookie) {
		return cookie.serialize({}, { expires: new Date(0), maxAge: 0 })
	} else {
		return cookie.serialize({ colorScheme })
	}
}

/**
 * @param formValue 传入的模式
 * @returns Boolean
 */
export const validateColorScheme = (formValue: any): formValue is ColorScheme => {
	return formValue === 'dark' || formValue === 'light' || formValue === 'system'
}
