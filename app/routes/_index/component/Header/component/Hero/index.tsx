import { useEffect, useRef } from 'react'
import { HeroLayout } from './component'
// import Vector from '/img/common/vector.jpg'

export const Hero = () => {
	// 展示 DOM 实例
	const containerRef = useRef<HTMLDivElement>(null)
	// 初始化组件状态
	const mounted = useRef(true)

	useEffect(() => {
		return () => {
			mounted.current = false
		}
	}, [])

	return (
		<HeroLayout
			left={
				<div ref={containerRef} className="lg:-mr-18">
					1
				</div>
			}
			right={<div>right</div>}
		/>
	)
}
