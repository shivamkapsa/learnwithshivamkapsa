import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";
import { CodePreview } from "./CodePreview";
import { heroContent } from "@/content/home/hero";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6">
      <div className="grid w-full gap-16 lg:grid-cols-2">
        <div>
          <div>
            <p className="mb-4 text-amber-500 font-semibold">
              {heroContent.badge}
            </p>

            <h1 className="text-5xl font-bold leading-tight">
             { heroContent.title}
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
    </section>
  );
}
