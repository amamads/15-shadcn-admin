import type { Task } from "@/types/task";
import type { RowSelectionState, VisibilityState } from "@tanstack/react-table";
import {
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { tasksColumns } from "../config/tasks-columns";
import useGetTasks from "./useGetTasks";

export default function useTasksTable() {
  const { data, isLoading, isError, error } = useGetTasks();
  const tasks = data?.rows;


  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  // const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    firstName: false,
    lastName: false,
    phone: false,
    id: false,
    birthDate: false,
    maritalStatus: false,
  });

  const table = useReactTable({
    data: tasks as Task[],
    columns: tasksColumns,
    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,

    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,

    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    onRowSelectionChange: setRowSelection,

    onColumnVisibilityChange: setColumnVisibility,

    state: {
      sorting,
      globalFilter,
      columnFilters,
      pagination,
      rowSelection,
      columnVisibility,
    },
  });

  return {
    table,
    isLoading,
    isError,
    error,
  };
}
