import { Button } from "@/components/atoms/button";
import { Search } from "lucide-react";

export default function SerchBtn() {
  return (
    <Button variant="outline" size='sm'>
      <div className="flex gap-2">
        <Search />
        <span>Search</span>
      </div>
      {/* <Card>
        <div className="flex h-1">
          <Command className="size-3.5" />
          <span className="text-[9px]">K</span>
        </div>
      </Card> */}
    </Button>
  );
}
