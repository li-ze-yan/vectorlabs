import clsx from 'clsx'
import { ColorTheme } from '~/lib/color-theme.server'
import iconsHref from '/img/common/icons.svg'

export const ColorThemeButton = ({
	colorTheme,
	value,
	label,
	iconHash,
}: {
	colorTheme: ColorTheme
	value: ColorTheme
	label: JSX.Element | string
	iconHash: string
}) => {
	return (
		<button
			value={value}
			name="colorTheme"
			className={clsx('flex items-center flex-nowrap gap-4', colorTheme === value ? 'text-[#0ea5e9]' : '')}
		>
			<svg className="h-4 w-4">
				<use href={`${iconsHref}#${iconHash}`} />
			</svg>
			<span>{label}</span>
		</button>
	)
}
