import { CoursesPageHero } from "@/features/courses/components/CoursesPageHero";
import { CourseGrid } from "@/features/courses/components/CourseGrid";

export default function CoursesPage() {
  return (
    <main>
   <CoursesPageHero />

      <CourseGrid />
    </main>
  );
}