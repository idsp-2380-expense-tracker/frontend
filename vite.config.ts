import reactSWC from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@mantine")) return "mantine"
            if (id.includes("recharts")) return "charts"
            if (id.includes("dayjs")) return "dayjs"
            return "vendor"
          }
        }
      }
    }
  },
  plugins: [
    reactSWC()
  ]
});