import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import { useMantineTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./styles/App.scss";

export default function App() {
  const theme = useMantineTheme();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      style={{
        backgroundColor: theme.other.backgroundColor,
        minHeight: "100vh",
        paddingTop: "1rem",
        color: theme.other.textColor,
      }}
    >
      <AppRouter />
    </div>
  );
}
