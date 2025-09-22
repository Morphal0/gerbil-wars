import { GaugeItem } from "./PanelItems";
import { ConsoleItem } from "./PanelItems";

export default function LeftPanel() {
  return (
    <div className="Right-panel">
      <h2>Evil hand</h2>
      <GaugeItem
        icon="health.png"
        className="Red-gauge"
        valueChange={0}
        currentValue={100}
        maxValue={100}
      />
      <GaugeItem
        icon="time.png"
        className="Green-gauge"
        valueChange={0}
        currentValue={20}
        maxValue={100}
      />
      <GaugeItem
        icon="rage.png"
        className="Purple-gauge"
        valueChange={0}
        currentValue={10}
        maxValue={100}
      />
      <ConsoleItem />
    </div>
  );
}
