import { OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { pointsInner, pointsOuter } from '~/utils/particleRing'

export const ParticleRing = () => {
	return (
		<div className="relative">
			<Canvas
				camera={{
					position: [10, -7.5, -5],
				}}
				style={{ height: '100vh' }}
				className="bg-slate-900"
			>
				<OrbitControls maxDistance={20} minDistance={10} enableZoom={false} />
				<directionalLight />
				<pointLight position={[-30, 0, -30]} power={10.0} />
				<PointCircle />
			</Canvas>

			<h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
				Drag & Zoom
			</h1>
		</div>
	)
}

const PointCircle = () => {
	const ref = useRef<any>(null)

	useFrame(({ clock }) => {
		if (ref.current?.rotation) {
			ref.current.rotation.z = clock.getElapsedTime() * 0.05
		}
	})

	return (
		<group ref={ref}>
			{pointsInner.map((point) => (
				<Point key={point.idx} position={point.position} color={point.color} />
			))}
			{pointsOuter.map((point) => (
				<Point key={point.idx} position={point.position} color={point.color} />
			))}
		</group>
	)
}

const Point = ({ position, color }: any) => {
	return (
		<Sphere position={position} args={[0.1, 10, 10]}>
			<meshStandardMaterial emissive={color} emissiveIntensity={0.5} roughness={0.5} color={color} />
		</Sphere>
	)
}
