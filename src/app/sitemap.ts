import type { MetadataRoute } from "next";

import { allBlogs } from "@/content/blogs";
import { allCourses } from "@/content/courses";
import { allNotes } from "@/content/notes";
import { allResources } from "@/content/resources";

const baseUrl = "https://learnwithshivamkapsa.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/courses`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/notes`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/learning-paths`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const courseRoutes = allCourses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const noteRoutes = allNotes.map((note) => ({
    url: `${baseUrl}/notes/${note.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = allBlogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourceRoutes = allResources.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...noteRoutes,
    ...blogRoutes,
    ...resourceRoutes,
  ];
}