import { htmlLessons } from "@/content/courses/lessons/html";

export function getLessonBySlug(
  slug: string,
) {
  return htmlLessons.find(
    (lesson) => lesson.slug === slug,
  );
}