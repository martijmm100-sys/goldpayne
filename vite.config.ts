import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base is "./" so the built site works on Cloudflare Pages, Netlify,
// and from any sub-path without extra configuration.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
