import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/atoms/sidebar";
import { cn } from "@/lib/utils";
import type { CollapsibleButton } from "@/types/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type Props = {
  details: CollapsibleButton;
  activeItemTitle: string | null;
  setActiveItemTitle: (title: string) => void;
};

export default function AppSidebarCollapsible({
  details: { items, title, icon: Icon },
  activeItemTitle,
  setActiveItemTitle,
}: Props) {
  const [open, setOpen] = useState(() => {
    if (items.some((item) => item.title === activeItemTitle)) return true;
    return false;
  });

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {Icon && <Icon />}
            <span>{title}</span>
            <ChevronRight
              className={cn("ml-auto duration-200", open ? "rotate-90" : "")}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((item, i) => (
              <SidebarMenuSubItem key={i}>
                <SidebarMenuSubButton
                  asChild
                  onClick={() => setActiveItemTitle(item.title)}
                  isActive={item.title === activeItemTitle}
                >
                  <Link to={item.path}>
                    {item.icon && <item.icon />}
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
