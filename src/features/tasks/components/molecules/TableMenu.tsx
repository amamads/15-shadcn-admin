import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { Label } from "@/components/atoms/label";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { Ellipsis, Trash2 } from "lucide-react";
import { labels } from "../../consts";
import type { Label as LabelType, Task } from "../../types";
import type { Row } from "@tanstack/react-table";
import DeleteRowDialog from "./DeleteRowDialog";
import { useState } from "react";

export default function TableMenu({ row }: { row: Row<Task> }) {
    const [openDialog, setOpenDialog] = useState(false)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem disabled>Make a copy</DropdownMenuItem>
        <DropdownMenuItem disabled>Edit</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <RadioGroup defaultValue={row.getValue("label")}>
                {labels.map((label, i) => (
                  <DropdownMenuItem asChild>
                    <Label htmlFor={label + i}>
                      <RadioGroupItem
                        value={label}
                        className="border-0 bg-transparent!"
                        id={label + i}
                      />
                      {capitalizeFirstLetter(label)}
                    </Label>
                  </DropdownMenuItem>
                ))}
              </RadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={()=>setOpenDialog(true)}>
          <DeleteRowDialog taskId={row.getValue("id")} open={openDialog}/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
