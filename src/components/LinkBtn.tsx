import { type ReactNode } from "react";
import { Link } from "react-router";

export default function LinkBtn({
  to,
  children,
}: {
  to: string;
  children?: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="border-b border-muted-foreground hover:text-foreground hover:border-foreground"
    >
      {children}
    </Link>
  );
}
