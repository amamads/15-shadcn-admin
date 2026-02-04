import { create } from 'zustand';
import settingPageName from '../helper/pageName';
import type { SettingsPageTitles } from '../types';

type SettingsStoreState = {
pageTitle:SettingsPageTitles;
setPageTitle:(value:SettingsPageTitles)=>void;
}


export const useSettingsStore = create<SettingsStoreState>((set)=>({
    pageTitle:settingPageName() ?? 'profile',
    setPageTitle:(value)=>set({pageTitle:value})
}))
export const selectPageTitle = (s: SettingsStoreState) => s.pageTitle
export const selectSetPageTitle = (s: SettingsStoreState) => s.setPageTitle 