import "./Panels.css";
import { GaugeItem } from "./PanelItems";
import { ActionItem } from "./PanelItems";

export default function LeftPanel() {
  return (
    <div className="Left-panel">
      <section className="Gauges-section">
        <h2>Gerbils</h2>
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
          currentValue={30}
          maxValue={100}
        />
        <GaugeItem
          icon="rage.png"
          className="Purple-gauge"
          valueChange={0}
          currentValue={10}
          maxValue={100}
        />
      </section>
      <section className="Actions-section">
        <h3>Actions</h3>
        <ActionItem label="Gnaw" icon="gnaw.png" className="Attack-action" />
        <ActionItem label="Throw" icon="throw.png" className="Attack-action" />
        <ActionItem
          label="Burrow"
          icon="burrow.png"
          className="Defense-action"
        />
        <ActionItem label="Snack" icon="snack.png" className="Defense-action" />
      </section>
    </div>
  );
}
