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
  Bug,
  ChevronRight,
  Fence,
  FileX,
  Lock,
  ServerOff,
  UserX,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const items = [
  { title: "Unauthorizes", icon: Lock, path: ROUTES.errors.unauthorized },
  { title: "Forbidden", icon: UserX, path: ROUTES.errors.forbidden },
  { title: "Not Found", icon: FileX, path: ROUTES.errors.notFound },
  {
    title: "Internal Server Error",
    icon: ServerOff,
    path: ROUTES.errors.internalServerError,
  },
  {
    title: "Maintenace Error",
    icon: Fence,
    path: ROUTES.errors.maintenanceError,
  },
];

export default function ErrorsCollapsible() {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <Bug />
            <span>Errors</span>
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
