import { motion } from 'framer-motion'
import { textVariant } from '~/utils/motion'

export const Introduce = () => {
	return (
		<section id="introduce" className="text-center px-8 pt-8 sm:pt-12 md:pt-24">
			<motion.h2
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white"
			>
				<span className="animate-pulse">👋 </span>
				这是 <code className="font-mono text-sky-500 dark:text-sky-400">Vector</code> 的个人网站
				<span className="animate-pulse"> 👋</span>
			</motion.h2>
			<figure>
				<blockquote>
					<motion.p
						variants={textVariant(0.25)}
						initial="hidden"
						whileInView="show"
						className="mt-6 max-w-3xl mx-auto text-lg"
					>
						从事前端开发工作三年多，主要使用{' '}
						<span className="text-sky-500 font-semibold dark:text-sky-400">React / Remix / Next / Vite</span> 技术栈，对{' '}
						<span className="text-sky-500 font-semibold dark:text-sky-400">React</span>{' '}
						框架内部实现原理有深入的理解，能够独立负责响应式/服务端渲染网站建设以及实现前端交互效果，具备构建复杂高性能{' '}
						<span className="text-sky-500 font-semibold dark:text-sky-400">Web</span> 应用程序、网站性能提升，
						<span className="text-sky-500 font-semibold dark:text-sky-400">SEO</span> 优化经验，能够通过{' '}
						<span className="text-sky-500 font-semibold dark:text-sky-400">
							Eslint / Prettier / Stylelint / Husky / Lint-staged / Commitlint / Commitizen
						</span>{' '}
						独立搭建前端工程化流程，熟练掌握 Git
						，提交粒度细，提交描述明晰，具有强烈的技术进取心、具备良好的团队合作精神，解决问题落实需求
					</motion.p>
				</blockquote>
				<motion.figcaption
					variants={textVariant(0.5)}
					initial="hidden"
					whileInView="show"
					className="mt-6 flex items-center justify-center space-x-4 text-left"
				>
					<img src="/img/common/vector.jpg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
					<div>
						<div className="text-slate-900 font-semibold dark:text-white">谭坤新</div>
						<div className="mt-0.5 text-sm leading-6">前端开发工程师</div>
					</div>
				</motion.figcaption>
			</figure>
		</section>
	)
}
