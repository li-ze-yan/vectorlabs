import { Form, useLocation } from '@remix-run/react'
import clsx from 'clsx'
import { Variants, motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '~/hooks'
import iconsHref from '/img/common/icons.svg'

export const ThemeToggle = () => {
	const location = useLocation()
	const colorTheme = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const itemVariants: Variants = {
		open: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 300, damping: 24, duration: 0.2 },
		},
		closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
	}

	return (
		<motion.nav initial={false} animate={isOpen ? 'open' : 'closed'} className="relative">
			<motion.button whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
				<summary className={clsx('_no-triangle grid h-10 w-10 place-items-center rounded-full')}>
					<svg className="hidden h-5 w-5 dark:inline">
						<use href={`${iconsHref}#moon`} />
					</svg>
					<svg className="h-5 w-5 dark:hidden">
						<use href={`${iconsHref}#sun`} />
					</svg>
				</summary>
			</motion.button>
			<Form
				preventScrollReset
				replace
				action="/_actions/color-scheme"
				method="post"
				className="absolute top-12 -left-12"
			>
				<motion.div
					variants={{
						open: {
							clipPath: 'inset(0% 0% 0% 0% round 10px)',
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.7,
								delayChildren: 0.3,
								staggerChildren: 0.05,
							},
						},
						closed: {
							clipPath: 'inset(10% 50% 90% 50% round 10px)',
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.3,
							},
						},
					}}
					className={clsx('p-1', isOpen ? 'pointer-events-auto' : 'pointer-events-none')}
				>
					<ul className="flex flex-col gap-3 rounded-lg w-32 p-2 text-[#334155] dark:text-[#cbd5e1] font-semibold dark:bg-[#1e293b] ring-1 ring-slate-900/10 shadow-sm dark:ring-0">
						<motion.li variants={itemVariants} hidden>
							<input type="hidden" name="returnTo" value={location.pathname + location.search} />
						</motion.li>
						<motion.li variants={itemVariants} className="flex justify-center">
							<button
								value="light"
								name="colorTheme"
								className={clsx('flex items-center flex-nowrap gap-4', colorTheme === 'light' ? 'text-[#0ea5e9]' : '')}
							>
								<svg className="h-4 w-4">
									<use href={`${iconsHref}#sun`} />
								</svg>
								<span>白昼模式</span>
							</button>
						</motion.li>
						<motion.li variants={itemVariants} className="flex justify-center">
							<button
								value="dark"
								name="colorTheme"
								className={clsx('flex items-center flex-nowrap gap-4', colorTheme === 'dark' ? 'text-[#0ea5e9]' : '')}
							>
								<svg className="h-4 w-4">
									<use href={`${iconsHref}#moon`} />
								</svg>
								<span>黑夜模式</span>
							</button>
						</motion.li>
						<motion.li variants={itemVariants} className="flex justify-center">
							<button
								value="system"
								name="colorTheme"
								className={clsx('flex items-center flex-nowrap gap-4', colorTheme === 'system' ? 'text-[#0ea5e9]' : '')}
							>
								<svg className="h-4 w-4">
									<use href={`${iconsHref}#monitor`} />
								</svg>
								<span>系统模式</span>
							</button>
						</motion.li>
					</ul>
				</motion.div>
			</Form>
		</motion.nav>
	)
}
