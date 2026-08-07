import { Container } from "@/components/shared/Container";

export function BlogsPageHero() {
  return (
    <section className="border-b border-border py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-500">
            BLOGS
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Practical Insights for Modern Developers
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Articles on building reliable, maintainable, and high-performing web
            applications.
          </p>
        </div>
      </Container>
    </section>
  );
}
