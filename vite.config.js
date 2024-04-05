import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/schedule-meeting": {
        target: "http://192.168.230.61:8000",
        changeOrigin: true,
      },
      "/api/message": {
        target: "http:/192.168.230.61:8000",
        changeOrigin: true,
      },
      "/api/business_email": {
        target: "http://192.168.230.61:8000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
