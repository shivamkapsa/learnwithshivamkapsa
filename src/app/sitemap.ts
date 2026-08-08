import type { MetadataRoute } from "next";

const baseUrl = "https://learnwithshivamkapsa.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/courses",
    "/notes",
    "/blogs",
    "/resources",
    "/learning-paths",
    "/projects",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}