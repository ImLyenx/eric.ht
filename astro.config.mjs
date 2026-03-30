import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sectionize from "@hbsnow/rehype-sectionize";
import icon from "astro-icon";
import node from "@astrojs/node";

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

  adapter: node({ mode: "standalone" }),

  vite: {
    plugins: [tailwindcss()],
  },
});
