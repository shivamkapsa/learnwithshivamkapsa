import { featuredCourses } from "@/content/home/courses";
import { Container } from "@/components/shared/Container";
import { CourseCard } from "./CourseCard";

export function CourseSection() {
  return (
    <section className="py-32">
      <Container>

        <div className="mb-16">

          <p className="text-amber-500 font-semibold">
            COURSES
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Courses
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}