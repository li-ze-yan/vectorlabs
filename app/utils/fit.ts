export const fit = (
	parentWidth: number,
	parentHeight: number,
	childWidth: number,
	childHeight: number,
	scale: number = 1,
	offsetX: number = 0.5,
	offsetY: number = 0.5,
) => {
	// 计算子元素和父元素的宽高比
	const childRatio = childWidth / childHeight
	const parentRatio = parentWidth / parentHeight
	// 初始化子元素的宽高
	let width = parentWidth * scale
	let height = parentHeight * scale

	// 调整尺寸
	if (childRatio < parentRatio) {
		height = width / childRatio
	} else {
		width = height * childRatio
	}

	return {
		width: Math.round(width),
		height: Math.round(height),
		// 计算子元素的位置
		left: Math.round((parentWidth - width) * offsetX),
		top: Math.round((parentHeight - height) * offsetY),
	}
}
