import { ClerkProvider } from "@clerk/clerk-react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "./styles/theme";
import App from "./App";

const root = createRoot(document.getElementById("root")!);

root.render(
  <MantineProvider theme={theme}>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </MantineProvider>
);
