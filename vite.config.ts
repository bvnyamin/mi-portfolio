import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep images as files. Inlining the small portrait variant as a data URI
    // put it in the JS bundle, so every visitor paid for a size most of them
    // never request.
    assetsInlineLimit: 0,
  },
});
