import { allCourses } from "@/content/courses";

export function getCourseBySlug(slug: string) {
  return allCourses.find((course) => course.slug === slug);
}