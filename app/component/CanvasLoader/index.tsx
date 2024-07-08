import { Html, useProgress } from '@react-three/drei'

export const CanvasLoader = () => {
	const { progress } = useProgress()
	return (
		<Html as="div" center className="flex justify-center items-center flex-col">
			<span className="canvas-loader"></span>
			<p className="text-sm font-bold mt-[40px] text-sky-400 dark:text-gray-200">{progress.toFixed(2)}%</p>
		</Html>
	)
}
