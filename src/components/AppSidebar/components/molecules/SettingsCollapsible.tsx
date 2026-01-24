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
import { ROUTES } from "@/router/paths";
import {
  Bell,
  ChevronRight,
  Monitor,
  Palette,
  Settings,
  UserCog,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const items = [
  { title: "Profile", icon: UserCog, path: ROUTES.settings.profile },
  { title: "Account", icon: Wrench, path: ROUTES.settings.account },
  { title: "Appearance", icon: Palette, path: ROUTES.settings.appearance },
  { title: "Notifications", icon: Bell, path: ROUTES.settings.notifications },
  { title: "Display", icon: Monitor, path: ROUTES.settings.display },
];

export default function SettingsCollapsible() {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <Settings />
            <span>Settings</span>
            <ChevronRight
              className={cn("ml-auto duration-200", open ? "rotate-90" : "")}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((item, i) => (
              <SidebarMenuSubItem key={i}>
                <SidebarMenuSubButton asChild>
                  <Link to={item.path}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
