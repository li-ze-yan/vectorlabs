import { createCookie, redirect, type ActionFunctionArgs } from '@remix-run/node'

const cookie = createCookie('color-scheme', {
	maxAge: 34560000,
	sameSite: 'lax',
})

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	const colorScheme = formData.get('colorScheme')
	console.log(formData.get('returnTo'))
	return redirect(formData.get('returnTo') as string, {
		headers: { 'Set-Cookie': cookie.serialize({ colorScheme }) } as any,
	})
}
