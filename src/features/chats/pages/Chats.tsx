import { Tabs } from "@/components/atoms/tabs";
import ChatsTabs from "../components/organisms/ChatsTabs";
import {
  selectSelectTab,
  selectSetSelectTab,
  useChatsStore,
} from "../store/chats-store";
import ChatsContents from "../components/organisms/ChatsContents";

export const Chats = () => {
  const selectTab = useChatsStore(selectSelectTab);
  const setSelectTab = useChatsStore(selectSetSelectTab);
  return (
    <div className="flex mt-5">
      <Tabs
        className="w-full grid grid-cols-3 gap-5"
        defaultValue={selectTab}
        onValueChange={setSelectTab}
      >
        <ChatsTabs />
        <ChatsContents />
      </Tabs>
    </div>
  );
};
