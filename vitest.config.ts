import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".")
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.{ts,tsx}"],
    clearMocks: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"],
      include: [
        "app/page.tsx",
        "app/about/page.tsx",
        "app/artist/page.tsx",
        "app/programmer/page.tsx",
        "components/**/*.{ts,tsx}",
        "data/**/*.ts",
        "lib/**/*.ts"
      ],
      thresholds: { lines: 90 }
    }
  }
});
