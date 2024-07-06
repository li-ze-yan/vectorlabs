import { motion } from 'framer-motion'

export const Words = ({
	children,
	bolder = false,
	layout,
	transition,
}: {
	children: string
	bolder?: boolean
	layout: boolean
	transition: any
}) => {
	return children.split(' ').map((word, i) => (
		<motion.span
			key={i}
			layout={layout}
			className="relative inline-flex whitespace-pre text-lg"
			transition={transition}
		>
			{bolder ? (
				<>
					<motion.span
						className="absolute top-0 left-0"
						initial={{ fontWeight: 400 }}
						animate={{ fontWeight: 500 }}
						transition={transition}
					>
						{word}{' '}
					</motion.span>
					<span style={{ opacity: 0, fontWeight: 500 }}>{word} </span>
				</>
			) : (
				word + ' '
			)}
		</motion.span>
	))
}
