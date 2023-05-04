import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ParrotUi",
      // the proper extensions will be added
      fileName: "ParrotUi",
      formats: ["cjs", "es", "iife", "umd"],
    },
  },
});
