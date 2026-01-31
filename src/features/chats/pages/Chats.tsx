import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Card, CardContent, CardHeader } from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Separator } from "@/components/atoms/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/tabs";
import {
  EllipsisVertical,
  MessagesSquare,
  Phone,
  Search,
  SquarePen,
  Video,
} from "lucide-react";
import {
  selectChatsData,
  selectSelectTab,
  selectSetSelectTab,
  useChatsStore,
} from "../store/chats-store";
import type { Chat } from "../types";

export const Chats = () => {
  const chatsData: Chat[] = useChatsStore(selectChatsData);
  const selectTab = useChatsStore(selectSelectTab);
  const setSelectTab = useChatsStore(selectSetSelectTab);

  // console.log(chatsData[0].messages[0].timestamp);
//   console.log(
//     new Date(chatsData[0].messages[0].timestamp)
//     .toLocaleDateString('en-GB',{month:'short',day:'numeric',year:'numeric'})
// );

  return (
    <div className="flex mt-5">
      <Tabs
        // className="w-full flex flex-row"
        className="w-full grid grid-cols-3 gap-5"
        defaultValue={selectTab}
        onValueChange={setSelectTab}
      >
        <div>
          <header className="grid grid-cols-2 gap-y-3 mb-5">
            <div className="flex gap-2">
              <h3 className="font-bold">Inbox</h3>
              <MessagesSquare />
            </div>
            <SquarePen className="text-muted-foreground size-4 justify-self-end" />
            <div className="border border-input rounded-lg flex items-center col-span-2">
              <Search className="size-4 text-muted-foreground ml-2" />
              <Input
                className="bg-background! border-0 placeholder:text-foreground/50 placeholder:text-sm"
                placeholder="Search Chat..."
              />
            </div>
          </header>
          <ScrollArea className="h-118">
            <TabsList className="flex flex-col bg-transparent p-0 h-auto w-full">
              {chatsData.map((chat, i) => (
                <div key={chat.username} className="w-full">
                  <TabsTrigger
                    value={chat.username}
                    className="w-full justify-start py-2 data-[state=active]:p-2! data-[state=active]:bg-muted! dark:data-[state=active]:text-muted-foreground! dark:data-[state=active]:hover:text-foreground! data-[state=active]:border-0! hover:bg-muted my-1 hover:text-foreground!"
                  >
                    <Avatar className="size-7 mb-auto">
                      <AvatarImage src={chat.profile} />
                      <AvatarFallback className="text-xs font-bold">
                        {chat.fullName}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col items-start truncate text-inherit">
                      <span className="text-sm font-semibold text-foreground">
                        {chat.fullName}
                      </span>
                      <span className="text-xs truncate text-inherit text-wrap text-left">
                        {chat.messages[0]?.sender === "You" && "You: "}
                        {chat.messages[0]?.message}
                      </span>
                    </div>
                  </TabsTrigger>

                  {i + 1 !== chatsData.length && <Separator />}
                </div>
              ))}
            </TabsList>
          </ScrollArea>
        </div>

        <div className="col-span-2">
          <TabsContent value="default" className="h-full">
            <Card className="h-full flex justify-center items-center">
              <Badge variant="outline" className="size-16">
                <MessagesSquare className="size-8!" />
              </Badge>
              <div className="grid justify-items-center gap-2">
                <h4>Your messages</h4>
                <p className="text-sm text-muted-foreground">
                  Send a message to start a chat.
                </p>
              </div>
              <Button>Send message</Button>
            </Card>
          </TabsContent>

          {chatsData.map(({ username, title, profile, fullName, messages }) => (
            <TabsContent value={username} key={username} className="h-full">
              <Card className="h-full">
                <CardHeader className="flex justify-between px-0 w-19/20 mx-auto">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-7 mb-auto">
                      <AvatarImage src={profile} />
                      <AvatarFallback className="text-xs font-bold">
                        {fullName}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start truncate text-inherit">
                      <span className="text-sm font-semibold text-foreground">
                        {fullName}
                      </span>
                      <span className="text-[12px] text-muted-foreground">
                        {title}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button variant="ghost" className="rounded-full size-7">
                      <Video className="size-3.5 text-muted-foreground " />
                    </Button>
                    <Button variant="ghost" className="rounded-full size-7">
                      <Phone className="size-3.5 text-muted-foreground " />
                    </Button>
                    <Button variant="ghost" className="rounded-full size-7">
                      <EllipsisVertical className="size-3.5 text-muted-foreground " />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea>
                    {messages.map(({sender,message,timestamp})=>{
                      // const date = new Date(timestamp)
                      // const 
                      return(
                        <p>{message}</p>
                      )
                    })}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
