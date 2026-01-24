import { Sidebar, SidebarContent } from "@/components/atoms/sidebar";
import { ScrollArea } from "../atoms/scroll-area";
import AppSidebarFooter from "./components/molecules/AppSidebarFooter";
import AppSidebarHeader from "./components/molecules/AppSidebarHeader";
import GeneralGroup from "./components/organisms/GeneralGroup";
import OtherGroup from "./components/organisms/OtherGroupe";
import PagesGroup from "./components/organisms/PagesGroup";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <AppSidebarHeader />
      <SidebarContent>
        <ScrollArea className="h-full">
          <GeneralGroup />
          <PagesGroup />
          <OtherGroup />
        </ScrollArea>
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
}
