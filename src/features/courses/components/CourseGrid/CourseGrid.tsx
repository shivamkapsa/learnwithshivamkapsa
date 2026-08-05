import { allCourses } from "@/content/courses";
import { Container } from "@/components/shared/Container";
import { CourseCard } from "../CourseCard";

export function CourseGrid() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}