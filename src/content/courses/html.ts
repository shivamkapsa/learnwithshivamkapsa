import { Course } from "@/features/courses/types/course";
import { htmlCurriculum } from "./curriculum/html";

export const htmlCourse: Course = {
  id: 1,

  slug: "html",

  title: "HTML",

  description:
    "Learn HTML from scratch and build the foundation of web development.",

  level: "Beginner",

  duration: "5 Hours",

  lessons: 22,

  thumbnail: "/images/courses/html.png",

  technologies: ["HTML5"],

curriculum: htmlCurriculum,
};