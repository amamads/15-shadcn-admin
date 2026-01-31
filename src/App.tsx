import { Outlet } from "react-router";
import { ScrollArea, ScrollBar } from "./components/atoms/scroll-area";
import Navbar from "./components/Navbar";
import AppProvider from "./providers/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <ScrollArea className="h-screen w-full">
        <div className="w-screen">
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
// "متقاضی گرامی، درخواست ترابرد شما به همراه اول با موفقیت ثبت گردید و کد پیگیری شما MCI-0000R361995151498A1H42 می باشد. جهت تکمیل ثبت نام و دریافت سیم کارت، کمتر از 24 ساعت به نزدیکترین دفتر یا فروشگاه همراه اول مراجعه نمایید. ارایه کد پیگیری در زمان تحویل سیمکارت جدید همراه اول الزامی است. همراه اول، یه همراه معتبر"