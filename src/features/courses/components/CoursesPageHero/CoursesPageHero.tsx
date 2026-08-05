import { Container } from "@/components/shared/Container";

export function CoursesPageHero() {
  return (
    <section className="py-24">
      <Container>
        <p className="font-semibold text-amber-500">
          COURSES
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Learn Modern Web Development
        </h1>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Structured courses with notes, projects,
          interview questions and real-world examples.
        </p>
      </Container>
    </section>
  );
}