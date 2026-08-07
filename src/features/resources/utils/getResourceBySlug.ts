import { allResources } from "@/content/resources";

export function getResourceBySlug(slug: string) {
  return allResources.find((resource) => resource.slug === slug);
}
