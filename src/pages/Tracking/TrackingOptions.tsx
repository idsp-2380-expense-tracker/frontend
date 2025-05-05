interface TrackingOptionsProps {
  showOptions: boolean;
  onToggleOptions: () => void;
  onManualFormOpen: () => void;
  onScan?: () => void;
}

export default function TrackingOptions({
  showOptions,
  onToggleOptions,
  onManualFormOpen,
  onScan,
}: TrackingOptionsProps) {
  return (
    <div id="tracking-option">
      {showOptions && (
        <>
          <button onClick={() => onScan && onScan()}>Scan to Track</button>
          <button onClick={onManualFormOpen}>Manual Tracking</button>
        </>
      )}
      <button
        onClick={onToggleOptions}
        style={{ fontSize: 24, cursor: "pointer" }}
      >
        {showOptions ? "×" : "+"}
      </button>
    </div>
  );
}
