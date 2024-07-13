import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ImageContainer } from './component'
import One from '/img/profile/character@1.webp'
import Two from '/img/profile/character@2.webp'
import Three from '/img/profile/character@3.webp'
import Four from '/img/profile/character@4.webp'
import Five from '/img/profile/character@5.webp'

export const HorizontalScroll = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%'])

	return (
		<div className="h-[500vh]" ref={targetRef}>
			<div className="h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">
				<motion.div
					className="flex justify-start items-center gap-[3vw] px-16"
					style={{
						x,
					}}
				>
					<motion.div
						initial={{
							opacity: 0,
							y: 150,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							ease: 'easeOut',
						}}
					>
						<ImageContainer imageSource={One} description="Geralt Of Rivia" />
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
							y: 150,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							ease: 'easeOut',
						}}
					>
						<ImageContainer imageSource={Two} description="John Wick" />
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
							y: 150,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							ease: 'easeOut',
						}}
					>
						<ImageContainer imageSource={Three} description="Luca Shangret" />
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
							y: 150,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							ease: 'easeOut',
						}}
					>
						<ImageContainer imageSource={Four} description="Billy Butcher" />
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
							y: 150,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							ease: 'easeOut',
						}}
					>
						<ImageContainer imageSource={Five} description="Tommy Shelby" />
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}
