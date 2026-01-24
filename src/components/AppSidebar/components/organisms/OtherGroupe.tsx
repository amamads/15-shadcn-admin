import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/atoms/sidebar";
import SettingsCollapsible from "../molecules/SettingsCollapsible";
import { CircleQuestionMark } from "lucide-react";
import { Link } from "react-router";
import { ROUTES } from "@/router/paths";
// import {
//   useSidebarStore,
//   selectActiveItemTitle,
//   selectSetActiveItemTitle,
// } from "@/stores/sidebar-store";

export default function OtherGroup() {
  // const activeItemTitle = useSidebarStore(selectActiveItemTitle);
  // const setActiveItemTitle = useSidebarStore(selectSetActiveItemTitle);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Other</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SettingsCollapsible />
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              // onClick={() => setActiveItemTitle(title)}
              // isActive={title === activeItemTitle}
            >
              <Link to={ROUTES.generals.help}>
                <CircleQuestionMark />
                <span>Help Center</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
