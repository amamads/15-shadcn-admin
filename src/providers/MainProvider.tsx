import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./thme-provider/theme.provider";
import { ReactQueryProvider } from "./ReactQueryProvider";

export default function MainProvider({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
