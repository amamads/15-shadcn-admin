import { formatter } from "@/shared/utils/formaatter";
import type { LucideIcon } from "lucide-react";
import { Card } from "./atoms/card";

export default function MetricCard({
  title,
  icon: Icon,
  value,
  changeText,
  badge,
}: {
  title: string;
  icon: LucideIcon;
  value: number | string;
  changeText: string;
  badge?: string;
}) {
  return (
    <Card className="grid grid-cols-2 px-8" key={title}>
      <p className="text-sm font-bold">{title}</p>
      <Icon className="size-4 place-self-end text-muted-foreground" />
      <div className="col-span-2">
        <p className="text-2xl font-bold">
          {badge}
          {typeof value === "number" ? formatter(value) : value}
        </p>
        <p className="text-secondary-foreground text-xs">{changeText}</p>
      </div>
    </Card>
  );
}
