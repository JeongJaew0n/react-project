import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode, command }) => {

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3700
    },
  }
});