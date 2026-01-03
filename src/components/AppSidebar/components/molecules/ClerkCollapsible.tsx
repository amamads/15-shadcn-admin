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
            <SidebarMenuSubItem>
              <SidebarMenuSubButton>Sign In</SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton>Sign Up</SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton>User Management</SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
