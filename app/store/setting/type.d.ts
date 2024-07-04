export type ISettingStore = {
	setting: ISetting | null
	setSetting: (setting: ISetting) => void
}

export type ISetting = {
	value: 'light' | 'dark' | 'system'
	label: '白天模式' | '夜间模式' | '系统模式'
	icon: JSX.Element
}
