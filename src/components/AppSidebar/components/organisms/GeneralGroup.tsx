import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/atoms/sidebar";
import {
  type LucideIcon,
  LayoutDashboard,
  ListTodo,
  Package,
  Users
} from "lucide-react";
import ClerkCollapsible from "../molecules/ClerkCollapsible";

type GeneralItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};
// Menu items.
const generalItems: GeneralItem[] = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Tasks",
    url: "#",
    icon: ListTodo,
  },
  {
    title: "Apps",
    url: "#",
    icon: Package,
  },
  {
    title: "Users",
    url: "#",
    icon: Users,
  },
];
export default function GeneralGroup() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {generalItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <ClerkCollapsible />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
