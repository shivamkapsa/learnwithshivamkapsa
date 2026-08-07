import { allResources } from "@/content/resources";

import { Container } from "@/components/shared/Container";

import { ResourceCard } from "../ResourceCard";

export function ResourcesGrid() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allResources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}
