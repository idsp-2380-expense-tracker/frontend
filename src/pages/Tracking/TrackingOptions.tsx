// Image Sources
import barcodeIcon from "../../assets/barcode_icon.svg";
import notePencilIcon from "../../assets/note_pencil_icon.svg";

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
    <div id="tracking-option" className={showOptions ? "show" : ""}>
      <button
        id="tracking-btn"
        className={showOptions ? "show" : ""}
        onClick={() => onScan && onScan()}
      >
        <span>Scan to Track</span>
        <img src={barcodeIcon} alt="Barcode icon" />
      </button>
      <button
        id="tracking-btn"
        className={showOptions ? "show" : ""}
        onClick={onManualFormOpen}
      >
        <span>Manual Tracking</span>
        <img src={notePencilIcon} alt="Note Pencil icon" />
      </button>

      <button
        id="options-btn"
        onClick={onToggleOptions}
        style={{ fontSize: 24, cursor: "pointer" }}
      >
        {showOptions ? "×" : "+"}
      </button>
    </div>
  );
}
