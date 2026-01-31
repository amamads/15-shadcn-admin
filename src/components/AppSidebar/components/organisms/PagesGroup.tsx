import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/atoms/sidebar";
import {
  selectActiveItemTitle,
  selectMenuButtons,
  selectSetActiveItemTitle,
  useSidebarStore,
} from "@/stores/sidebar-store";
import AppSidebarCollapsible from "../molecules/AppSidebarCollapsible";

export default function PagesGroup() {
  const activeItemTitle = useSidebarStore(selectActiveItemTitle);
  const setActiveItemTitle = useSidebarStore(selectSetActiveItemTitle);
  const { pages } = useSidebarStore(selectMenuButtons);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {pages.collapsibles &&
            pages.collapsibles.map((item) => (
              <AppSidebarCollapsible
                details={item}
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
                key={item.title}
              />
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
