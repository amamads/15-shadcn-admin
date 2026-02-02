import { Button } from "@/components/atoms/button";
import { Checkbox } from "@/components/atoms/checkbox";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/atoms/command";
import { Label } from "@/components/atoms/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover";
import { Separator } from "@/components/atoms/separator";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import type { Table as TableType } from "@tanstack/react-table";
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { statuses } from "../../consts";
import type { Task } from "../../types";
import StatusIcon from "./StatusIcon";
import { Badge } from "@/components/atoms/badge";

export default function StatusFilterMenu({
  table,
}: {
  table: TableType<Task>;
}) {
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  useEffect(() => {
    table.getColumn("status")?.setFilterValue(selectedStatus);
  }, [selectedStatus, table]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed">
          <CirclePlus />
          <span>Status</span>
          {selectedStatus.length === 0 || (
            <>
              <Separator orientation="vertical" />
              <Badge variant="secondary" className="rounded-md w-3">
                {selectedStatus.length}
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-55" align="start">
        <Command>
          <CommandInput placeholder="Status" />
          <CommandGroup>
            {statuses.map((status, i) => (
              <CommandItem key={status} className="py-2">
                <Checkbox
                  id={status + i}
                  checked={selectedStatus.includes(status)}
                  onCheckedChange={(checked) => {
                    setSelectedStatus((prev) => {
                      const arr = prev ?? [];
                      if (checked)
                        return arr.includes(status) ? arr : [...arr, status];
                      return arr.filter((s) => s !== status);
                    });
                  }}
                />
                <Label className="w-full" htmlFor={status + i}>
                  <StatusIcon status={status} />
                  <p>{capitalizeFirstLetter(status)}</p>
                  <p className="text-xs ml-auto">
                    {
                      table
                        .getCoreRowModel()
                        .rows.filter((row) => row.getValue("status") === status)
                        .length
                    }
                  </p>
                </Label>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        {selectedStatus.length === 0 || (
          <>
            <Separator />
            <Button
              variant="ghost"
              className="w-full m-1"
              size="sm"
              onClick={() => setSelectedStatus([])}
            >
              Clear filters
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
