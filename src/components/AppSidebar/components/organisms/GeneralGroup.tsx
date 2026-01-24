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
  MessagesSquare,
  Package,
  Users,
} from "lucide-react";
import ClerkCollapsible from "../molecules/ClerkCollapsible";
import { Link } from "react-router-dom";
import { ROUTES } from "@/router/paths";
import {
  selectActiveItemTitle,
  selectSetActiveItemTitle,
  useSidebarStore,
} from "@/stores/sidebar-store";

type GeneralItem = {
  title: string;
  path: string;
  icon: LucideIcon;
};
// Menu items.
const generalItems: GeneralItem[] = [
  {
    title: "Dashboard",
    path: ROUTES.dashboard.root,
    icon: LayoutDashboard,
  },
  {
    title: "Tasks",
    path: ROUTES.tasks.root,
    icon: ListTodo,
  },
  {
    title: "Apps",
    path: ROUTES.apps.root,
    icon: Package,
  },
  {
    title: "Chats",
    path: ROUTES.chats.root,
    icon: MessagesSquare,
  },
  {
    title: "Users",
    path: ROUTES.users.root,
    icon: Users,
  },
];

export default function GeneralGroup() {
  const activeItemTitle = useSidebarStore(selectActiveItemTitle);
  const setActiveItemTitle = useSidebarStore(selectSetActiveItemTitle);
  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {generalItems.map(({ title, path, icon: Icon }) => (
            <SidebarMenuItem key={title}>
              <SidebarMenuButton
                asChild
                onClick={() => setActiveItemTitle(title)}
                isActive={title === activeItemTitle}
              >
                <Link to={path}>
                  <Icon />
                  <span>{title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <ClerkCollapsible />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
