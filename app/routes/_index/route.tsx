import type { MetaFunction } from '@remix-run/node'
import { Header, Introduce } from './component'

export const meta: MetaFunction = () => {
	return [{ title: 'Vectorlabs' }, { name: 'description', content: 'Welcome to Vectorlabs!' }]
}

export default function Index() {
	return (
		<div>
			<Header />
			<Introduce />
		</div>
	)
}
