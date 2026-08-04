import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";
import { CodePreview } from "./CodePreview";
import { heroContent } from "@/content/home/hero";
import { Container } from "@/components/shared/Container";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center">
      <Container>
        <div className="grid w-full gap-16 lg:grid-cols-2">
          <div>
            <div>
              <p className="mb-4 text-amber-500 font-semibold">
                {heroContent.badge}
              </p>

              <h1 className="text-5xl font-bold leading-tight">
                {heroContent.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                {heroContent.description}
              </p>

              <HeroButtons />

              <HeroStats />
            </div>
          </div>

          <CodePreview />
        </div>
      </Container>
    </section>
  );
}
