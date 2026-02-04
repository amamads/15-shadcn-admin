import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/atoms/select";
import { SelectValue } from "@radix-ui/react-select";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { settingsPages } from "../../consts";
import { selectPageTitle, selectSetPageTitle, useSettingsStore } from "../../store/settings-store";
import SettingsPagesIcon from "./SettingsPagesIcon";

export default function NavigatreSelectBox() {
  // const [pageTitle, setPageTitle] = useState(pageTitle);
  const pageTitle = useSettingsStore(selectPageTitle)
  const setPageTitle = useSettingsStore(selectSetPageTitle)
  const navigate = useNavigate();

  useEffect(() => {
    const { path } = settingsPages.filter(
      (page) => page.title === pageTitle,
    )[0];
    navigate(path);
  }, [pageTitle, navigate]);

  return (
    <Select defaultValue={pageTitle} onValueChange={setPageTitle}>
      <SelectTrigger>
        <SelectValue className="uppercase" />
      </SelectTrigger>
      <SelectContent position="popper">
        {settingsPages.map(({ title }) => (
          <SelectItem value={title}>
            <div className="flex items-center gap-3">
              <SettingsPagesIcon title={title} className="size-5" />
              <p>{title}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
