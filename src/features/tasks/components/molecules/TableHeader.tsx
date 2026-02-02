import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import type { Table as TableType } from "@tanstack/react-table";
import { X } from "lucide-react";
import type { Task } from "../../types";
import PriorityFilterMenu from "./PriorityFilterMenu";
import StatusFilterMenu from "./StatusFilterMenu";
import {
  useTasksStore,
  selectsetFilterStatus,
  selectsetFilterPriority,
  selectfilterStatus,
  selectfilterPriority,
} from "../../store/tasks-store";

export default function TableHeader({ table }: { table: TableType<Task> }) {
  const filterStatuses = useTasksStore(selectfilterStatus);
  const setFilterStatuses = useTasksStore(selectsetFilterStatus);
  const filterPrioritys = useTasksStore(selectfilterPriority);
  const setFilterPrioritys = useTasksStore(selectsetFilterPriority);

  const showResetBtn = [filterStatuses, filterPrioritys].some(
    (filter) => filter.length > 0,
  );

  function resetFilter() {
    setFilterPrioritys([]);
    setFilterStatuses([]);
  }

  return (
    <header className="grid gap-2">
      <div className="flex flex-col items-start gap-2">
        {showResetBtn && (
          <Button variant="ghost" onClick={resetFilter}>
            Reset <X />
          </Button>
        )}
        <div className="space-x-2">
          <StatusFilterMenu table={table} />
          <PriorityFilterMenu table={table} />
        </div>
      </div>
      <Input
        placeholder="Filter By title or ID"
        className="w-35"
        onChange={(e) =>
          table.getColumn("title")?.setFilterValue(e.target.value)
        }
      />
    </header>
  );
}
