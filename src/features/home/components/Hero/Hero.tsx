import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";
import { CodePreview } from "./CodePreview";
import { heroContent } from "@/content/home/hero";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div
          className="
    absolute
    left-1/2
    top-0
    h-[650px]
    w-[650px]
    -translate-x-1/2
    rounded-full
    bg-amber-500/10
    blur-[140px]
  "
        />
      </div>
      <div
  className="
    absolute
    inset-0
    -z-20
    opacity-[0.05]
    [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
    [background-size:60px_60px]
  "
/>
      <Container>
        <div className="grid w-full gap-24 lg:grid-cols-2">
          <div>
            <div>
              <Badge className="mb-6">{heroContent.badge}</Badge>

              <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Become the{" "}
                <span className="bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Developer
                </span>
                <br />
                Companies Want to Hire.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
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
