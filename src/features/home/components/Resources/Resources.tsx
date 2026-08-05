import { Container } from "@/components/shared/Container";
import { resources } from "@/content/home/resources";
import { ResourceCard } from "./ResourceCard";

export function Resources() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14">
          <p className="font-semibold text-amber-500">
            RESOURCES
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Developer Resources
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Curated tools, books, cheat sheets and resources to help you become a better developer.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              {...resource}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}