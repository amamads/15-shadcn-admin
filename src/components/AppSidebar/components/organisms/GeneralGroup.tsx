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
import AppSidebarButton from "../molecules/AppSidebarButton";
import AppSidebarCollapsible from "../molecules/AppSidebarCollapsible";

export default function GeneralGroup() {
  const activeItemTitle = useSidebarStore(selectActiveItemTitle);
  const setActiveItemTitle = useSidebarStore(selectSetActiveItemTitle);
  const { general } = useSidebarStore(selectMenuButtons);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {general.items &&
            general.items.map((item) => (
              <AppSidebarButton
                item={item}
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
                key={item.title}
              />
            ))}
          {general.collapsibles &&
            general.collapsibles.map((item) => (
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
