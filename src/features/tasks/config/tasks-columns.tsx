import { Checkbox } from "@/components/atoms/checkbox";
import type { Task } from "@/types/task";
import { type ColumnDef } from "@tanstack/react-table";
import { Menu } from "lucide-react";

export const tasksColumns: ColumnDef<Task>[] = [
  {
    id: "checkbox",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
      />
    ),
  },
  {
    accessorKey: "taskId",
    header: "Task",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    id: "menu",
    // header: () => <Checkbox />,
    cell: () => <Menu />,
  },
];
