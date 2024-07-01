import { create } from 'zustand'
import { ISettingStore } from './type'

export const useSettingStore = create<ISettingStore>((set) => ({
	setting: null,
	setSetting: (setting) => set({ setting }),
}))
