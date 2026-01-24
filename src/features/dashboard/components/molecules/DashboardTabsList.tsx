import { TabsTrigger, TabsList } from "@/components/atoms/tabs";
import dashboardTabs from "../../config/dashboard-tabs";
import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area";

export default function DashboardTabsList() {
  return (
    <ScrollArea>
      <TabsList className="bg-secondary rounded-lg p-1  w-85 mb-5">
        {dashboardTabs.map(({ value, name }) => (
          <TabsTrigger
            key={value}
            value={value}
            disabled={value === "reports" || value === "notifications"}
            className="
                            data-[state=active]:bg-ring
                            data-[state=active]:shadow-sm
                            data-[state=active]:border
                            data-[state=active]:border-border
                            dark:data-[state=active]:bg-input/50
                          "
          >
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
      <ScrollBar orientation="horizontal" className="h-2" />
    </ScrollArea>
  );
}
