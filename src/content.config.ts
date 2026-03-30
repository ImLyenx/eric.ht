import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(
      z.object({ name: z.string(), color: z.string(), icon: z.string() }),
    ),
    description: z.string(),
    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
