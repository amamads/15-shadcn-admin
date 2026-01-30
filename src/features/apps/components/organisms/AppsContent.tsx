import { selectAppsData, useAppsStore } from "../../store/apps-store";
import AppCard from "../molecules/AppCard";

export default function AppsContent() {
  const appsData = useAppsStore(selectAppsData);
  return (
    <main className="space-y-4">
      {appsData.map((data) => (
        <AppCard data={data} />
      ))}
    </main>
  );
}
