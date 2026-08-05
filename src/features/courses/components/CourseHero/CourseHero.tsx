import { Container } from "@/components/shared/Container";
import { Course } from "../../types/course";

type Props = {
  course: Course;
};

export function CourseHero({
  course,
}: Props) {
  return (
    <section className="py-24">
      <Container>
        <p className="font-semibold text-amber-500">
          {course.level}
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          {course.title}
        </h1>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          {course.description}
        </p>
      </Container>
    </section>
  );
}