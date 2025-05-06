import { useMantineTheme } from "@mantine/core";
import AppRouter from "./routes/AppRouter";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/carousel/styles.css";
import "./styles/App.scss";

export default function App() {
  const theme = useMantineTheme();

  return (
    <div
      style={{
        backgroundColor: theme.other.backgroundColor,
        minHeight: "100vh",
        color: theme.other.textColor,
      }}
    >
      <AppRouter />
    </div>
  );
}
