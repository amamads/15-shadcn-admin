import { Chart } from "../molecules/analytics/Chart";
import Cards from "../molecules/analytics/Cards";
import Referrenrs from "../molecules/analytics/Referrenrs";
import Devices from "../molecules/analytics/Devices";

export default function Analytics() {
  return (
    <div className="flex flex-col gap-4">
      <Chart />
      <Cards />
      <Referrenrs/>
      <Devices/>
    </div>
  );
}
