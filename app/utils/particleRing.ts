const MIN_RADIUS: any = 7.5
const MAX_RADIUS: any = 15
const DEPTH: any = 2
const LEFT_COLOR: any = '6366f1'
const RIGHT_COLOR: any = '8b5cf6'
const NUM_POINTS: any = 2500

/**
 * --- Credit ---
 * https://stackoverflow.com/questions/16360533/calculate-color-hex-having-2-colors-and-percent-position
 */
const getGradientStop = (ratio: any) => {
	// For outer ring numbers potentially past max radius,
	// just clamp to 0
	ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio

	const c0 = LEFT_COLOR.match(/.{1,2}/g).map((oct: any) => parseInt(oct, 16) * (1 - ratio))
	const c1 = RIGHT_COLOR.match(/.{1,2}/g).map((oct: any) => parseInt(oct, 16) * ratio)
	const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255))
	const color = ci
		.reduce((a, v) => (a << 8) + v, 0)
		.toString(16)
		.padStart(6, '0')

	return `#${color}`
}

const calculateColor = (x: any) => {
	const maxDiff = MAX_RADIUS * 2
	const distance = x + MAX_RADIUS

	const ratio = distance / maxDiff

	const stop = getGradientStop(ratio)
	return stop
}

const randomFromInterval = (min: any, max: any) => {
	return Math.random() * (max - min) + min
}

export const pointsInner = Array.from({ length: NUM_POINTS }, (v, k) => k + 1).map((num) => {
	const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS)
	const randomAngle = Math.random() * Math.PI * 2

	const x = Math.cos(randomAngle) * randomRadius
	const y = Math.sin(randomAngle) * randomRadius
	const z = randomFromInterval(-DEPTH, DEPTH)

	const color = calculateColor(x)

	return {
		idx: num,
		position: [x, y, z],
		color,
	}
})

export const pointsOuter = Array.from({ length: NUM_POINTS / 4 }, (v, k) => k + 1).map((num) => {
	const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2)
	const angle = Math.random() * Math.PI * 2

	const x = Math.cos(angle) * randomRadius
	const y = Math.sin(angle) * randomRadius
	const z = randomFromInterval(-DEPTH * 10, DEPTH * 10)

	const color = calculateColor(x)

	return {
		idx: num,
		position: [x, y, z],
		color,
	}
})
