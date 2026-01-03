import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/atoms/sidebar";
import AppSidebarHeader from "./components/molecules/AppSidebarHeader";
import GeneralGroup from "./components/organisms/GeneralGroup";
import PagesGroup from "./components/organisms/PagesGroup";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" open>
      <SidebarContent>
        <AppSidebarHeader />

        <GeneralGroup />
        <PagesGroup />

        {/* // *______ other ______* */}
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
