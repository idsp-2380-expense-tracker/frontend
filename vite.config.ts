import reactSWC from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@clerk/clerk-react",
      "@emotion/react",
      "@emotion/styled",
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/dates",
      "@mantine/carousel",
      "@mantine/charts",
      "@mantine/code-highlight",
      "@mantine/dropzone",
      "@mantine/form",
      "@mantine/modals",
      "@mantine/notifications",
      "@mantine/nprogress",
      "@mantine/spotlight",
      "@mantine/tiptap",
      "@mui/material",
      "@tabler/icons-react",
      "@tiptap/extension-link",
      "@tiptap/react",
      "@tiptap/starter-kit",
      "axios",
      "dayjs",
      "embla-carousel",
      "embla-carousel-react",
      "react-datepicker",
      "react-images-uploading",
      "react-router-dom",
      "recharts"
    ]
  },
  plugins: [
    reactSWC()
  ]
});