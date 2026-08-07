import { allBlogs } from "@/content/blogs";

export function getBlogBySlug(slug: string) {
  return allBlogs.find((blog) => blog.slug === slug);
}
