import type { MetaFunction } from '@remix-run/node'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { StarsCanvas } from '~/component'
import { Header, HorizontalScroll, Introduce } from './component'
import { Question } from './component/Question'

export const meta: MetaFunction = () => {
	return [{ title: 'Vectorlabs' }, { name: 'description', content: 'Welcome to Vectorlabs!' }]
}

export default function Index() {
	useEffect(() => {
		handleSmoothScroll()
	}, [])

	// 全局平滑滚动
	const handleSmoothScroll = () => {
		const lenis = new Lenis()
		const raf = (time: any) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}

	return (
		<div>
			<Header />
			<div className="relative z-0">
				<Introduce />
				<Question />
				<StarsCanvas />
			</div>
			<HorizontalScroll />
			<div className="w-full h-screen"></div>
		</div>
	)
}
