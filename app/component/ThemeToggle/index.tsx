import { Form, useLocation, useNavigation } from '@remix-run/react'
import clsx from 'clsx'
import { forwardRef, useEffect, useRef, useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import iconsHref from '/img/common/icons.svg'

export const ThemeToggle = () => {
	const location = useLocation()

	return (
		<DetailsMenu className="relative cursor-pointer">
			<summary className={clsx('_no-triangle grid h-10 w-10 place-items-center rounded-full')}>
				<svg className="hidden h-5 w-5 dark:inline">
					<use href={`${iconsHref}#moon`} />
				</svg>
				<svg className="h-5 w-5 dark:hidden">
					<use href={`${iconsHref}#sun`} />
				</svg>
			</summary>
			<DetailsPopup>
				<Form preventScrollReset replace action="/_actions/color-scheme" method="post" className="flex flex-col gap-px">
					<input type="hidden" name="returnTo" value={location.pathname + location.search} />
					<button value="light" name="colorScheme">
						<svg className="h-4 w-4">
							<use href={`${iconsHref}#sun`} />
						</svg>{' '}
						Light
					</button>
					<button value="moon" name="colorScheme">
						<svg className="h-4 w-4">
							<use href={`${iconsHref}#moon`} />
						</svg>{' '}
						Dark
					</button>
					<button value="monitor" name="colorScheme">
						<svg className="h-4 w-4">
							<use href={`${iconsHref}#monitor`} />
						</svg>{' '}
						System
					</button>
				</Form>
			</DetailsPopup>
		</DetailsMenu>
	)
}

export const DetailsMenu = forwardRef<HTMLDetailsElement, React.ComponentPropsWithRef<'details'>>(
	({ ...props }, forwardedRef) => {
		const { onToggle, onMouseDown, onTouchStart, onFocus, open, ...rest } = props
		const [isOpen, setIsOpen] = useState(false)
		const location = useLocation()
		const navigation = useNavigation()
		const clickRef = useRef<boolean>(false)
		const focusRef = useRef<boolean>(false)

		useEffect(() => {
			if (navigation.state === 'submitting') {
				setIsOpen(false)
			}
		}, [navigation.state])

		useEffect(() => {
			setIsOpen(false)
		}, [location.key])

		useEffect(() => {
			if (isOpen) {
				const clickHandler = () => {
					if (!clickRef.current) setIsOpen(false)
					clickRef.current = false
				}
				const focusHandler = () => {
					if (!focusRef.current) setIsOpen(false)
					focusRef.current = false
				}
				document.addEventListener('mousedown', clickHandler)
				document.addEventListener('touchstart', clickHandler)
				document.addEventListener('focusin', focusHandler)
				return () => {
					document.removeEventListener('mousedown', clickHandler)
					document.removeEventListener('touchstart', clickHandler)
					document.removeEventListener('focusin', focusHandler)
				}
			}
		}, [isOpen])

		return (
			<details
				ref={forwardedRef}
				open={open ?? isOpen}
				onToggle={(event) => {
					onToggle && onToggle(event)
					if (event.defaultPrevented) return
					setIsOpen(event.currentTarget.open)
				}}
				onMouseDown={(event) => {
					onMouseDown && onMouseDown(event)
					if (event.defaultPrevented) return
					if (isOpen) clickRef.current = true
				}}
				onTouchStart={(event) => {
					onTouchStart && onTouchStart(event)
					if (event.defaultPrevented) return
					if (isOpen) clickRef.current = true
				}}
				onFocus={(event) => {
					onFocus && onFocus(event)
					if (event.defaultPrevented) return
					if (isOpen) focusRef.current = true
				}}
				{...rest}
			/>
		)
	},
)
DetailsMenu.displayName = 'DetailsMenu'

export function DetailsPopup({ children }: { children: React.ReactNode }) {
	return (
		<div className="absolute right-0 z-20 md:left-0">
			<div className="relative top-1 w-40 rounded-md border border-gray-100 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-gray-900">
				{children}
			</div>
		</div>
	)
}
