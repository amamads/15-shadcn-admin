import { Avatar, AvatarFallback } from "@/components/atoms/avatar";

export default function AvatarNav() {
  return (
    <Avatar>
      <AvatarFallback className="text-sm font-bold">SN</AvatarFallback>
    </Avatar>
  );
}
