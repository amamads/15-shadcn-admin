import { create } from "zustand";
import type { Chat } from "../types";
import conversationsJSON from "../data/canv.json";
const conversations: Chat[] = conversationsJSON.conversations;

type ChatsStoreState = {
  data: Chat[];
  selectTab: string;
  setSelectTab: (tabValue: string) => void;
};
export const useChatsStore = create<ChatsStoreState>((set) => ({
  data: conversations,
  selectTab: 'default',
  setSelectTab: (tabValue) => set({ selectTab: tabValue }),
}));

export const selectChatsData = (s: ChatsStoreState) => s.data;
export const selectSelectTab = (s: ChatsStoreState) => s.selectTab;
export const selectSetSelectTab = (s: ChatsStoreState) => s.setSelectTab;
