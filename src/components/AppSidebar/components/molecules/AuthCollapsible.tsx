import { Button } from "@/components/atoms/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/atoms/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/atoms/sidebar";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/paths";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  { title: "Sign In", path: ROUTES.auth.signIn },
  { title: "Sign in (2 Col)", path: ROUTES.auth.signIn2 },
  { title: "Sign Up", path: ROUTES.auth.signUp },
  { title: "Forgot Password", path: ROUTES.auth.forgotPassword },
  { title: "OTP", path: ROUTES.auth.otp },
];

export default function AuthCollapsible() {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton asChild>
            <Button variant='ghost'>
              <ShieldCheck />
              <span>Auth</span>
              <ChevronRight
                className={cn("ml-auto duration-200", open ? "rotate-90" : "")}
              />
            </Button>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((item) => (
              <SidebarMenuSubItem key={item.path}>
                <SidebarMenuSubButton asChild>
                  <Link to={item.path}>{item.title}</Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
