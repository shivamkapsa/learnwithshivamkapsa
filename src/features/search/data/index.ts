import { allBlogs } from "@/content/blogs";
import { allCourses } from "@/content/courses";
import { allNotes } from "@/content/notes";
import { allResources } from "@/content/resources";

import type { SearchItem } from "../types/search";

export const searchIndex: SearchItem[] = [
  ...allCourses.map((course) => ({
    id: `course-${course.slug}`,
    type: "course" as const,
    title: course.title,
    description: course.description,
    href: `/courses/${course.slug}`,
    tags: course.technologies,
  })),

  ...allNotes.map((note) => ({
    id: `note-${note.slug}`,
    type: "course" as const,
    title: note.title,
    description: note.description,
    href: `/notes/${note.slug}`,
    tags: note.tags,
  })),

  ...allResources.map((resource) => ({
    id: `resource-${resource.slug}`,
    type: "course" as const,
    title: resource.title,
    description: resource.description,
    href: `/resources/${resource.slug}`,
    tags: resource.tags,
  })),

  ...allBlogs.map((blog) => ({
    id: `blog-${blog.slug}`,
    type: "course" as const,
    title: blog.title,
    description: blog.description,
    href: `/blogs/${blog.slug}`,
    tags: blog.tags,
  })),
];