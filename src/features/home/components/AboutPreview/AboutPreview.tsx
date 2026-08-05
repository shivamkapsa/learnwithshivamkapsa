import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/shared/Container";

import { aboutPreview } from "@/content/home/about";

import { AboutItem } from "./AboutItem";

export function AboutPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge>{aboutPreview.badge}</Badge>

            <h2 className="mt-6 text-5xl font-bold">
              {aboutPreview.title}
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              {aboutPreview.description}
            </p>

            <div className="mt-10 space-y-5">
              {aboutPreview.items.map((item) => (
                <AboutItem
                  key={item}
                  text={item}
                />
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex rounded-full bg-amber-500 px-6 py-3 font-semibold text-black"
            >
              Read More
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-card p-12">
            <h3 className="text-2xl font-bold">
              Learn. Build. Grow.
            </h3>

            <p className="mt-6 text-muted-foreground">
              Every course, note, project and roadmap on this platform is
              designed to help you become job-ready with practical knowledge.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}