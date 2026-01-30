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
export default function OtherGroup() {
  const activeItemTitle = useSidebarStore(selectActiveItemTitle);
  const setActiveItemTitle = useSidebarStore(selectSetActiveItemTitle);
  const { other } = useSidebarStore(selectMenuButtons);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Other</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {other.collapsibles &&
            other.collapsibles.map((item) => (
              <AppSidebarCollapsible
                details={item}
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
              />
            ))}
          {other.items &&
            other.items.map((item) => (
              <AppSidebarButton
                item={item}
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
              />
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
