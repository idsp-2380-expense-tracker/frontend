import { useState } from "react";
import NavBar from "../../components/NavBar";
import { DB_Tracking } from "../../interfaces/dbStructure";
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
  const [editItem, setEditItem] = useState<DB_Tracking | null>(null);

  const trackingData = trackingService.getTrackingData() ?? [];
  const markedDates = trackingData.map((item) => item.dateOfPayment);

  const selectedDateString = selectedDate?.toISOString().split("T")[0] ?? "";
  const filteredData = trackingData.filter(
    (item) => item.dateOfPayment === selectedDateString
  );

  if (showManualForm) {
    return (
      <TrackingForm
        key={editItem?.id ?? -1}
        onBack={() => {
          setEditItem(null);
          setShowManualForm(false);
        }}
        editItem={editItem}
      />
    );
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
        data={filteredData}
        onEdit={(item) => {
          setEditItem(item);
          setShowManualForm(true);
        }}
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
