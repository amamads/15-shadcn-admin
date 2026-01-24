import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from "@/components/atoms/sidebar";
import AuthCollapsible from "../molecules/AuthCollapsible";
import ErrorsCollapsible from "../molecules/ErrorsCollapsibe";

export default function PagesGroup() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
            <AuthCollapsible/>
            <ErrorsCollapsible/>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
