/**
 * @param element 监控的 DOM
 * @param options 定制 IntersectionObserver 的行为，定义元素视为可见的阈值（threshold）
 */
export const createInViewPromise = (element: HTMLElement, options: any = {}) => {
	// observer 用于存储 IntersectionObserver 的实例
	let observer: IntersectionObserver
	// 在 Promise 内部，创建一个 IntersectionObserver 实例。这个实例接收一个回调函数，该函数会在被观察元素的可见性发生变化时被调用
	const promise = new Promise<void>((resolve) => {
		// 如果没有传入 threshold，则默认为 1，1 为全部可见
		const threshold = typeof options.threshold === 'undefined' ? 1 : options.threshold
		observer = new IntersectionObserver((entries) => {
			for (let i = 0; i < entries.length; i++) {
				// 如果元素可见，且可见比例大于等于 threshold，则 resolve
				const inView = entries[i].isIntersecting && entries[i].intersectionRatio >= threshold
				if (inView) return resolve()
			}
		}, options)
		// 开始观察元素
		observer.observe(element)
	})

	return {
		promise,
		// 停止观察元素并清理资源
		disconnect: () => {
			if (observer) {
				observer.disconnect()
			}
		},
	}
}
