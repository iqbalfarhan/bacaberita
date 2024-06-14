import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://iqbalfarhan.github.io/bacaberita/",
  build: {
    outDir: "dist",
    rollupOptions: {},
  },
  plugins: [react()],
});
