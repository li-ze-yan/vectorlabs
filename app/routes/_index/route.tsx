import type { MetaFunction } from '@remix-run/node'
import { Header } from './component'

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
	return (
		<div className="mb-20 overflow-hidden sm:mb-32 md:mb-40">
			<Header />
		</div>
	)
}
