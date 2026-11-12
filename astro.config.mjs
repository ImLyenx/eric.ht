import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  redirects: {
    "/projects": "/blog",
    "/projects/[...id]": "/blog/[...id]",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
