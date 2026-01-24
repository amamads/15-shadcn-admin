import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import AppProvider from "./providers/AppProvider";
import { ScrollArea, ScrollBar } from "./components/atoms/scroll-area";

export default function App() {
  return (
    <AppProvider>
      <ScrollArea className="h-screen w-full">
        <div className="w-screen pb-9">
          <div className="w-18/20 mx-auto">
            <Navbar />
            <Outlet />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </AppProvider>
  );
}
