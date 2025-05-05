import { useState } from "react";
import NavBar from "../../components/NavBar";
import TrackingCalendar from "./TrackingCalendar";
import TrackingDrawer from "./TrackingDrawer";
import TrackingForm from "./TrackingForm";
import TrackingOptions from "./TrackingOptions";

export default function Tracking() {
  const [showManualForm, setShowManualForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [drawerExpanded, setDrawerExpanded] = useState(false);

  const markedDates = ["2025-05-01", "2025-05-10"]; // TEST

  if (showManualForm) {
    return <TrackingForm onBack={() => setShowManualForm(false)} />;
  }

  return (
    <>
      <h1>TEST_TRACKING</h1>

      <TrackingCalendar
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        markedDates={markedDates}
        wrapperClassName={!drawerExpanded ? "above-drawer" : "under-drawer"}
      />

      <TrackingDrawer
        expanded={drawerExpanded}
        onToggle={() => setDrawerExpanded((prev) => !prev)}
        selectedDate={selectedDate}
      />

      <TrackingOptions
        showOptions={showOptions}
        onToggleOptions={() => setShowOptions((prev) => !prev)}
        onManualFormOpen={() => setShowManualForm(true)}
        onScan={() => {}}
      />

      <div className="nav-bar">
        <NavBar />
      </div>
    </>
  );
}