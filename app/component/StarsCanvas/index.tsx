import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { inSphere } from 'maath/random'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useTheme } from '~/hooks'

export const StarsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	)
}

const Stars = (props: any) => {
	const ref = useRef<any>(null)
	const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.2 }))
	const colorTheme = useTheme()
	const [starsColor, setStarsColor] = useState('')

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10
		ref.current.rotation.y -= delta / 15
	})

	useEffect(() => {
		switch (colorTheme) {
			case 'light':
				setStarsColor('#ff0000')
				break
			case 'dark':
				setStarsColor('#f272c8')
				break
			case 'system':
				const media = window.matchMedia('(prefers-color-scheme: dark)')
				if (media.matches) {
					setStarsColor('#f272c8')
				} else {
					setStarsColor('#ff0000')
				}
				break
			default:
				break
		}
	}, [colorTheme])

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial transparent color={starsColor} size={0.002} sizeAttenuation={true} depthWrite={false} />
			</Points>
		</group>
	)
}
