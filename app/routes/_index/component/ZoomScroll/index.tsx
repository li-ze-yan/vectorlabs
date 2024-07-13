import { useRef } from 'react'

export const ZoomScroll = () => {
	const container = useRef<any>(null)
	// const { scrollYProgress } = useScroll({
	// 	target: container,
	// 	offset: ['start start', 'end end'],
	// })

	// const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
	// const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
	// const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
	// const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
	// const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky overflow-hidden top-0 h-[100vh]">
				<div className="w-full h-full absolute top-0 flex items-center justify-center">
					<div className="relative w-[25vw] h-[25vh]">
						<img src="" alt="" className="w-full h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	)
}
