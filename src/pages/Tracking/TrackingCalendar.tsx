import dayjs from "dayjs";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DB_Tracking } from "../../interfaces/dbStructure";

interface TrackingCalendarProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
  trackingData: DB_Tracking[];
  wrapperClassName?: string;
}

export default function TrackingCalendar({
  selectedDate,
  onDateChange,
  trackingData,
  wrapperClassName,
}: TrackingCalendarProps) {
  const [visibleMonth, setVisibleMonth] = useState(selectedDate ?? new Date());
  const markedDates = trackingData.flatMap((item) => {
    if (!item.repeat) return [dayjs(item.dateOfPayment).format("YYYY-MM-DD")];

    const base = dayjs(visibleMonth);
    const repeatDay = dayjs(item.dateOfPayment).date();
    const date = base.date(repeatDay);
    return [date.format("YYYY-MM-DD")];
  });

  return (
    <div id="tracking-calendar" className={wrapperClassName}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => onDateChange(date as Date)}
        onMonthChange={(date) => setVisibleMonth(date)}
        onYearChange={(date) => setVisibleMonth(date)}
        inline
        dayClassName={(date) =>
          markedDates.includes(dayjs(date).format("YYYY-MM-DD"))
            ? "marked-day"
            : ""
        }
      />
    </div>
  );
}
