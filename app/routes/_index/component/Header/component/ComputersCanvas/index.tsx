import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { CanvasLoader } from '~/component'

const Computers = ({ isMobile }: { isMobile: boolean }) => {
	const computer = useGLTF('/model/desktop_pc/scene.gltf')

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	)
}

export const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)')
		setIsMobile(mediaQuery.matches)
		const handleMediaQueryChange = (event: any) => {
			setIsMobile(event.matches)
		}
		mediaQuery.addEventListener('change', handleMediaQueryChange)
		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange)
		}
	}, [])

	return (
		<Canvas
			className="z-0"
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	)
}
