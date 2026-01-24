import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/atoms/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/atoms/sidebar";
import { cn } from "@/lib/utils";
import { ChevronRight, UserLock } from "lucide-react";
import { useState } from "react";

const items = [
  { title: "Sign in", path: "#" },
  { title: "Sign Up", path: "#" },
  { title: "User Management", path: "#" },
];

export default function ClerkCollapsible() {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <UserLock />
            <span>Secured by Clerk</span>
            <ChevronRight
              className={cn("ml-auto duration-200", open ? "rotate-90" : "")}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map(({title}) => (
              <SidebarMenuSubItem key={title}>
                <SidebarMenuSubButton>{title}</SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
