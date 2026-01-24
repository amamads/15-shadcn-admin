import { Separator } from "../atoms/separator";
import { SidebarTrigger } from "../atoms/sidebar";
// import { SidebarTrigger } from "../atoms/sidebar";
import AvatarDropdown from "./components/AvatarDropdown";
import MenuDropdown from "./components/MenuDropdown";
import SerchBtn from "./components/serchIBtn";
import ThemeDropdown from "./components/ThemeDropdown";
import ThemeSettinga from "./components/ThemeSettings";

export default function Navbar() {
  return (
    <div className="flex  justify-between py-4 w-full">
      <div className="flex gap-3 items-center">
        <SidebarTrigger variant="outline" className="size-8" />

        <Separator orientation="vertical" />

        <MenuDropdown />
      </div>
      <div className="flex gap-3 items-center">
        <SerchBtn />
        <ThemeDropdown />
        <ThemeSettinga />
        <AvatarDropdown />
      </div>
    </div>
  );
}
