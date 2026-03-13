import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
});

const styles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/styles" }),
  schema: baseSchema,
});

const masters = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/masters" }),
  schema: baseSchema,
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: baseSchema,
});

const culture = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/culture" }),
  schema: baseSchema,
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: baseSchema,
});

export const collections = {
  styles,
  masters,
  guides,
  culture,
  blog,
};