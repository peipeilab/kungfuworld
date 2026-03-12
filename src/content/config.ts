import { defineCollection, z } from 'astro:content';

// 定义文章格式（标题、日期、分类、描述等）
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(), // 文章标题
    date: z.date(), // 发布日期
    category: z.string(), // 分类（比如太极/咏春）
    description: z.string(), // SEO描述
    tags: z.array(z.string()), // 标签
  }),
});

// 导出配置
export const collections = {
  'posts': postsCollection,
};