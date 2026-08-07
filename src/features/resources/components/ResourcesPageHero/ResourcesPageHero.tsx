import { Container } from "@/components/shared/Container";

export function ResourcesPageHero() {
  return (
    <section className="py-24">
      <Container>
        <p className="font-semibold text-amber-500">RESOURCES</p>

        <h1 className="mt-4 text-5xl font-bold">
          Curated Resources for Developers
        </h1>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Practical roadmaps, references, and learning guides to help you build
          skills with confidence.
        </p>
      </Container>
    </section>
  );
}
