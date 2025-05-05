import { SwipeableDrawer } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/NavBar";
import TrackingForm from "./TrackingForm";

export default function Tracking() {
  const [showOptions, setShowOptions] = useState(false);
  const [showManualForm, setShowManualForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const markedDates = ["2025-05-01", "2025-05-10"]; // TEST

  if (showManualForm) {
    return <TrackingForm onBack={() => setShowManualForm(false)} />;
  }

  return (
    <>
      <h1>TEST_TRACKING</h1>

      <div 
        id="tracking-calendar"
        className={!drawerExpanded ? "above-drawer" : "under-drawer"}
      >
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          dayClassName={(date) => {
            const formatted = date.toISOString().split("T")[0];
            return markedDates.includes(formatted) ? "marked-day" : "";
          }}
        />
        <button onClick={() => setSelectedDate(dayjs("2025-01-01").toDate())}>
          TEST_2025_01_01
        </button>
      </div>

      <SwipeableDrawer
        anchor="bottom"
        open={true}
        hideBackdrop
        disableSwipeToOpen
        onClose={() => {}}
        onOpen={() => {}}
        slotProps={{
          paper: {
            className: drawerExpanded
              ? "tracking-drawer expanded"
              : "tracking-drawer collapsed",
          },
        }}
      >
        <div className="tracking-drawer-content">
          <div className="drawer-handle">
            <p onClick={() => setDrawerExpanded(!drawerExpanded)}>
              --------------------------------------------------
            </p>
          </div>
          <p>TEST_DRAWER</p>
          <p>TEST_{selectedDate?.toDateString()}</p>
        </div>
      </SwipeableDrawer>
      
      <div id="tracking-option">
        {showOptions && (
          <>
            <button onClick={() => {}}>Scan to Track</button>
            <button onClick={() => setShowManualForm(true)}>Manual Tracking</button>
          </>
        )}

        <button
          onClick={() => setShowOptions(!showOptions)}
          style={{ fontSize: 24, cursor: "pointer" }}
        >
          {showOptions ? "x" : "+"}
        </button>
      </div>

      <div className="nav-bar">
        <NavBar />
      </div>
    </>
  );
}