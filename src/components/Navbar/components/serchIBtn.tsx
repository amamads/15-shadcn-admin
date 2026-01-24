import { Button } from "@/components/atoms/button";
import { Search } from "lucide-react";

export default function SerchBtn() {
  return (
    <Button variant="outline" size="sm" className="flex gap-2 text-muted-foreground">
      {/* <div className="flex gap-2 text-muted-foreground">
      </div> */}
        <Search />
        <span>Search</span>
    </Button>
  );
}
