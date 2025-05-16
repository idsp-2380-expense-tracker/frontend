import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { DB_Tracking } from "../../interfaces/dbStructure";
import { trackingService } from "../../services/trackingService";
import TrackingCalendar from "./TrackingCalendar";
import TrackingDrawer from "./TrackingDrawer";
import TrackingForm from "./TrackingForm";
import TrackingOptions from "./TrackingOptions";

export default function Tracking() {
  const location = useLocation();
  const { date: dateString } = (location.state as { date?: string }) ?? {};

  const [showManualForm, setShowManualForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const [editItem, setEditItem] = useState<DB_Tracking | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(
    dateString ? dayjs(dateString).toDate() : new Date()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (dateString) {
      setSelectedDate(dayjs(dateString).toDate());
    }
  }, [dateString]);

  const selectedDay = dayjs(selectedDate).date();
  const trackingData = trackingService.getTrackingData() ?? [];
  const filteredData = trackingData.filter((item) => {
    if (item.repeat) {
      const itemDay = dayjs(item.dateOfPayment).date();
      return itemDay === selectedDay;
    }
    return dayjs(item.dateOfPayment).isSame(selectedDate, "day");
  });

  if (showManualForm) {
    return (
      <TrackingForm
        key={editItem?.id ?? -1}
        onBack={() => {
          setEditItem(null);
          setShowManualForm(false);
        }}
        editItem={editItem}
        initialDate={selectedDate}
        onDateChange={(date) => {
          if (date) setSelectedDate(date);
        }}
      />
    );
  }

  return (
    <>
      <div className="tracking-header">
        <Header />
      </div>
      <TrackingCalendar
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        trackingData={trackingData}
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
        // onScan={() => {}}
      />
      <NavBar />
    </>
  );
}
