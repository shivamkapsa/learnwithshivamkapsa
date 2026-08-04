import { Course } from "@/types/course";

export const featuredCourses: Course[] = [
  {
    id: 1,
    slug: "react-js",
    title: "React.js Mastery",
    description:
      "Complete React from beginner to advanced with real projects.",
    level: "Beginner",
    lessons: 52,
    duration: "18 Hours",
    free: true,
    tags: ["React", "Hooks", "Projects"],
    image: "/images/react-course.png",
  },

  {
    id: 2,
    slug: "next-js",
    title: "Next.js Complete Guide",
    description:
      "Build production-ready applications using Next.js App Router.",
    level: "Intermediate",
    lessons: 40,
    duration: "14 Hours",
    free: true,
    tags: ["Next.js", "SSR", "SEO"],
    image: "/images/next-course.png",
  },

  {
    id: 3,
    slug: "javascript-interview",
    title: "JavaScript Interview",
    description:
      "Everything needed to crack frontend JavaScript interviews.",
    level: "Advanced",
    lessons: 80,
    duration: "22 Hours",
    free: false,
    tags: ["JavaScript", "Interview"],
    image: "/images/javascript-course.png",
  },
];