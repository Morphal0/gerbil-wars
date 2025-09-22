import "./PanelItems.css";

export function ActionItem({ label, icon, className, onClick }) {
  return (
    <button className={"Action-item " + className} onClick={onClick}>
      <img src={"img/" + icon} alt={label} />
      {label}
    </button>
  );
}

export function GaugeItem({
  icon,
  className,
  valueChange,
  currentValue,
  maxValue,
}) {
  const filledWidth = Math.floor(
    ((currentValue - valueChange) * 100) / maxValue
  );

  return (
    <div className="Gauge-item">
      <img src={"img/" + icon} className="Gauge-icon" alt={icon} />
      <div
        className={className + " Filled"}
        style={{
          width: filledWidth + "%",
        }}
      ></div>
      <div
        className={className + " Empty"}
        style={{ width: 100 - filledWidth + "%" }}
      ></div>
    </div>
  );
}

export function ConsoleItem() {
  return (
    <div className="Console-item">
      <span className="Console-label">
        <h2>Log</h2>
      </span>
      <div className="Console-output">
        <InfoItem text="The hand has entered playground... " />
      </div>
    </div>
  );
}

export function InfoItem({ text }) {
  return (
    <div className="Info-item">
      <span className="Info-value">{text}</span>
    </div>
  );
}
