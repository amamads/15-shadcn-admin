import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/atoms/sidebar";
import React from "react";
import ClerkCollapsible from "../molecules/ClerkCollapsible";

export default function PagesGroup() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
