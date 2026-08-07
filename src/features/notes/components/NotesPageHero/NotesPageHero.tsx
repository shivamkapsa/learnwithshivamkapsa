import { Container } from "@/components/shared/Container";

export function NotesPageHero() {
  return (
    <section className="py-24">
      <Container>
        <p className="font-semibold text-amber-500">
          NOTES
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Learn Faster with Structured Notes
        </h1>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Well-organized notes covering Programming,
          Computer Science, Competitive Exams,
          Mathematics, English, Science and much more.
        </p>
      </Container>
    </section>
  );
}