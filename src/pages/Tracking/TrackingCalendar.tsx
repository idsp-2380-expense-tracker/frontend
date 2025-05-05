import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TrackingCalendarProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
  markedDates: string[];
  wrapperClassName?: string;
}

export default function TrackingCalendar({
  selectedDate,
  onDateChange,
  markedDates,
  wrapperClassName,
}: TrackingCalendarProps) {
  return (
    <div id="tracking-calendar" className={wrapperClassName}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => onDateChange(date as Date)}
        inline
        dayClassName={(date) => {
          const formatted = date.toISOString().split("T")[0];
          return markedDates.includes(formatted) ? "marked-day" : "";
        }}
      />
    </div>
  );
}
