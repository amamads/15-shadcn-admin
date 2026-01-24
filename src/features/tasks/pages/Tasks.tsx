import { Button } from "@/components/atoms/button";
import TasksTable from "../components/organisms/TasksTable";
import { Download, Plus } from "lucide-react";

export const Tasks = () => {
  return (
    <div className="mt-5">
      <div className="grid gap-2">
        <div>
          <h3 className="font-bold">Tasks</h3>
          <p className="text-muted-foreground">
            Here's a list of your tasks for this month!
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <span>Import</span>
            <Download />
          </Button>
          <Button>
            <span>Create</span>
            <Plus />
          </Button>
        </div>
      </div>
      <TasksTable />
    </div>
  );
};
