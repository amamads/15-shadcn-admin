import { Button } from "@/components/atoms/button";
import { CirclePlus } from "lucide-react";
import useTasksTable from "../../hooks/useTasksTable";
import { Input } from "@/components/atoms/input";
import Table from "../molecules/Table";
import Footer from "../molecules/Footer";

export default function TasksTable() {
  const { table, isLoading, isError, error } = useTasksTable();

  if (isLoading)
    return <h1 className="text-center text-2xl font-bold">Loading...</h1>;
  if (isError)
    return <h1 className="text-center text-2xl font-bold">{error?.message}</h1>;

  return (
    <div className="mt-4">
      <header className="grid gap-2">
        <div className="space-x-2">
          <Button variant="outline" className="border-dashed">
            <CirclePlus />
            <span>Status</span>
          </Button>
          <Button variant="outline" className="border-dashed">
            <CirclePlus />
            <span>Priority</span>
          </Button>
        </div>
        <Input placeholder="Filter By title or ID" className="w-35" />
      </header>
      <main className="mt-3">
        <Table table={table} />
      </main>
      <Footer table={table}/>
    </div>
  );
}
