import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/atoms/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
