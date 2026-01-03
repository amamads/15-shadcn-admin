import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { Menu } from "lucide-react";

export default function MenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="size-8">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Overview</DropdownMenuItem>
        <DropdownMenuItem disabled>Customers</DropdownMenuItem>
        <DropdownMenuItem disabled>Products</DropdownMenuItem>
        <DropdownMenuItem disabled>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}