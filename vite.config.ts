import reactSWC from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  optimizeDeps: {
    include: ["@mantine/core", "recharts", "dayjs"]
  },
  plugins: [
    reactSWC(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Montro - Personal Expense Tracker",
        short_name: "Montro",
        start_url: "/",
        display: "standalone",
        theme_color: "#cef24a",       // $primary-color
        background_color: "#38355b",  // $background-color
        icons: [
          { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  ]
});
