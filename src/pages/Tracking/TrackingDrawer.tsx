import { SwipeableDrawer } from "@mui/material";

interface TrackingDrawerProps {
  expanded: boolean;
  onToggle: () => void;
  selectedDate: Date | null;
}

export default function TrackingDrawer({
  expanded,
  onToggle,
  selectedDate,
}: TrackingDrawerProps) {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={true}
      hideBackdrop
      disableSwipeToOpen
      onClose={() => {}}
      onOpen={() => {}}
      slotProps={{
        paper: {
          className: expanded
            ? "tracking-drawer expanded"
            : "tracking-drawer collapsed",
        },
      }}
    >
      <div className="tracking-drawer-content">
        <div className="drawer-handle">
          <p onClick={onToggle}>--------------------------------------------------</p>
        </div>
        <p>TEST_DRAWER</p>
        <p>{selectedDate ? selectedDate.toDateString() : ""}</p>
      </div>
    </SwipeableDrawer>
  );
}
