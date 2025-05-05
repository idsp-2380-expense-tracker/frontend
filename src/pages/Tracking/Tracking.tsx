import { useState } from "react";
import NavBar from "../../components/NavBar";
import TrackingForm from "./TrackingForm";

export default function Tracking() {
  const [mode, setMode] = useState<"main" | "options" | "manual">("main");

  if (mode === "manual") {
    return <TrackingForm onBack={() => setMode("main")} />;
  }

  return (
    <>
      <h1>TEST_TRACKING</h1>

      {mode === "main" && (
        <button
          onClick={() => setMode("options")}
          style={{ fontSize: 24, cursor: "pointer" }}
        >
          +
        </button>
      )}

      {mode === "options" && (
        <>
          <button onClick={() => {}}>
            Scan to Track
          </button>
          <button onClick={() => setMode("manual")}>
            Manual Tracking
          </button>
        </>
      )}
      <NavBar />
    </>
  );
}
