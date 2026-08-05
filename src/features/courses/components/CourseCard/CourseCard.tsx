import Link from "next/link";
import { Course } from "@/features/courses/types/course";

type Props = {
  course: Course;
};

export function CourseCard({ course }: Props) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="rounded-3xl border border-border bg-card p-6 transition hover:border-amber-500"
    >
      <p className="text-sm text-amber-500">
        {course.level}
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {course.title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {course.description}
      </p>

      <div className="mt-6 flex justify-between text-sm">
        <span>{course.lessons} Lessons</span>

        <span>{course.duration}</span>
      </div>
    </Link>
  );
}