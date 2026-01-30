import { Separator } from "@/components/atoms/separator";
import AppsContent from "../components/organisms/AppsContent";
import AppsHeader from "../components/organisms/AppsHeader";

export const Apps = () => {
  return (
    <div className="space-y-5 mt-4">
      <AppsHeader />
      <Separator />
      <AppsContent />
    </div>
  );
};
