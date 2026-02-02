import { Input } from "@/components/atoms/input";
import { selectSetSearchTerm, useChatsStore } from "../../store/chats-store";
import { Search } from "lucide-react";

export default function SearchInput() {
  const setSearchTerm = useChatsStore(selectSetSearchTerm);
  return (
    <div className="border border-input rounded-lg flex items-center col-span-2 ">
      <Search className="size-4 text-muted-foreground ml-2" />
      <Input
        className="bg-background! border-0 placeholder:text-foreground/50 placeholder:text-sm focus-visible:ring-0"
        placeholder="Search Chat..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
