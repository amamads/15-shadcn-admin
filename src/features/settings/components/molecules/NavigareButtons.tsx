import { Button } from "@/components/atoms/button";
import { useLocation, useNavigate } from "react-router";
import { settingsPages } from "../../consts";
import SettingsPagesIcon from "./SettingsPagesIcon";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area";

export default function NavigatreButtons() {
  const { pathname } = useLocation();
  const pageDetail = settingsPages.find((page) => page.path === pathname);
  const navigate = useNavigate();

  return (
    <ScrollArea>
      <div className="hidden md:flex py-2 gap-2 w-100 lg:flex-col lg:w-40">
        {settingsPages.map((page) => (
          <Button
            variant="ghost"
            data-active={pageDetail === page}
            onClick={() => navigate(page.path)}
            className="data-[active=true]:bg-accent data-[active=true]:hover:no-underline hover:underline gap-3"
          >
            <SettingsPagesIcon title={page.title} />
            {capitalizeFirstLetter(page.title)}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
