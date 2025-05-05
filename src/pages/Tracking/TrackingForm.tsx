import { OnBackProps } from "../../interfaces/uiProps";

export default function TrackingForm({ onBack }: OnBackProps) {
  return (
    <>
      <h1>TEST_MANUAL_TRACKING</h1>
      <button onClick={onBack}>← Back to Tracking</button>
    </>
  );
}