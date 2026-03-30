import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sectionize from "@hbsnow/rehype-sectionize";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    icon({
      include: {
        carbon: ["*"],
        "simple-icons": ["*"],
        "skill-icons": ["*"],
        logos: ["*"],
      },
    }),
  ],

  markdown: { rehypePlugins: [sectionize] },

  vite: {
    plugins: [tailwindcss()],
  },
});
