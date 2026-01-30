import {
  SidebarMenuButton,
  SidebarMenuSubItem,
} from "@/components/atoms/sidebar";
import type { MenuButton } from "@/types/sidebar";
import { Link } from "react-router";

type Props = {
  item: MenuButton;
  activeItemTitle: string | null;
  setActiveItemTitle: (title: string) => void;
};

export default function AppSidebarButton({
  item: { title, icon: Icon, path },
  activeItemTitle,
  setActiveItemTitle,
}: Props) {
  return (
    <SidebarMenuSubItem>
      <SidebarMenuButton
        asChild
        onClick={() => setActiveItemTitle(title)}
        isActive={title === activeItemTitle}
      >
        <Link to={path}>
          {Icon && <Icon />}
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuSubItem>
  );
}
