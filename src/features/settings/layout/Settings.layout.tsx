import { Separator } from "@/components/atoms/separator";
import { Outlet } from "react-router";
import NavigatreSelectBox from "../components/molecules/NavigatreSelectBox";
import PageDetail from "../components/molecules/PageDetail";
import { ScrollArea } from "@/components/atoms/scroll-area";

export const SettingsLayout = () => {
  return (
    <div className="space-y-4">
      <div className="py-3">
        <h4 className="font-bold">Settings</h4>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="bg-muted" />
      {/* <div>
      </div> */}
      <NavigatreSelectBox />
      <PageDetail />

      <Separator />

      <ScrollArea className="h-[50vh]">
        <Outlet />
      </ScrollArea>
    </div>
  );
};
