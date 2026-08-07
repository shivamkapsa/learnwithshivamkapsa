import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";
import { ResourceContent } from "@/features/resources/components/ResourceContent";
import { ResourceHero } from "@/features/resources/components/ResourceHero";
import { getResourceBySlug } from "@/features/resources/utils";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="py-20">
      <Container>
        <ResourceHero resource={resource} />
        <ResourceContent content={resource.content} />
      </Container>
    </main>
  );
}
