import { useState } from "react";
import NavBar from "../../components/NavBar";
import { trackingService } from "../../services/trackingService";
import TrackingCalendar from "./TrackingCalendar";
import TrackingDrawer from "./TrackingDrawer";
import TrackingForm from "./TrackingForm";
import TrackingOptions from "./TrackingOptions";

export default function Tracking() {
  const [showManualForm, setShowManualForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [drawerExpanded, setDrawerExpanded] = useState(false);

  const trackingData = trackingService.getTrackingData() ?? [];
  const markedDates = trackingData.map((item) => item.dateOfPayment);

  if (showManualForm) {
    return <TrackingForm onBack={() => setShowManualForm(false)} />;
  }

  return (
    <>
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
      <NavBar />
    </>
  );
}
