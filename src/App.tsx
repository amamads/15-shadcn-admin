import { Outlet, useLocation } from "react-router";
import { ScrollArea, ScrollBar } from "./components/atoms/scroll-area";
import { Switch } from "./components/atoms/switch";
import Navbar from "./components/Navbar";
import AppProvider from "./providers/AppProvider";
import { useEffect } from "react";
import { ROUTES } from "./router/paths";

export default function App() {
    const location = useLocation();
    
    const path = '/settings/profile';
  
    useEffect(() => {
      console.log(location.pathname);
    }, [location]);
    console.log(
      ROUTES
    );
  return (
    <AppProvider>
      <ScrollArea className="h-screen w-full">
        <div className="w-screen h-screen">
          <div className="w-18/20 mx-auto">
            <Navbar />
            <Switch/>
            <Outlet />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </AppProvider>
  );
}
// "متقاضی گرامی، درخواست ترابرد شما به همراه اول با موفقیت ثبت گردید و کد پیگیری شما MCI-0000R361995151498A1H42 می باشد. جهت تکمیل ثبت نام و دریافت سیم کارت، کمتر از 24 ساعت به نزدیکترین دفتر یا فروشگاه همراه اول مراجعه نمایید. ارایه کد پیگیری در زمان تحویل سیمکارت جدید همراه اول الزامی است. همراه اول، یه همراه معتبر"