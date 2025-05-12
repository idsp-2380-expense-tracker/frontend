import { Progress } from "@mantine/core";
import classes from "../pages/Home/Home.module.scss";

interface SpendingStatsBarProps {
  percentLeft: number;
  remaining: number;
}

export default function SpendingStatsBar({ percentLeft, remaining }: SpendingStatsBarProps) {
  return (
    <div style={{ position: "relative" }}>
      <Progress
        value={percentLeft}
        mt="md"
        size={52}
        radius="18"
        classNames={{
          root: classes.progressTrack,
          section: classes.progressSection,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        ${remaining.toFixed(2)}
      </div>
    </div>
  );
}
