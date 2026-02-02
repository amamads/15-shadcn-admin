import { selectChatsData, useChatsStore } from "../../store/chats-store";
import type { Chat } from "../../types";
import ContentPage from "../molecules/ContentPage";
import DefaultContentPage from "./DefaultContentPage";

export default function ChatsContents() {
  const chatsData: Chat[] = useChatsStore(selectChatsData);
  return (
    <div className="col-span-2">
      <DefaultContentPage />
      {chatsData.map(data => <ContentPage data={data}/>)}
    </div>
  );
}
