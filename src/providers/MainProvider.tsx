import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./thme-provider/theme.provider";
import SidebarProvider from "./Sidebar.provider";

export default function MainProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>{children}</SidebarProvider>
      {/* {children} */}
    </ThemeProvider>
  );
}
