import { Container } from "@/components/shared/Container";

export function BlogsPageHero() {
  return (
    <section className="py-24">
      <Container>
        <p className="font-semibold text-amber-500">BLOGS</p>

        <h1 className="mt-4 text-5xl font-bold">
          Practical Insights for Modern Developers
        </h1>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Articles on building reliable, maintainable, and high-performing web
          applications.
        </p>
      </Container>
    </section>
  );
}
