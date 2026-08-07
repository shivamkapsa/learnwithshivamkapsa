import { ResourcesGrid } from "@/features/resources/components/ResourcesGrid";
import { ResourcesPageHero } from "@/features/resources/components/ResourcesPageHero";

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesPageHero />
      <ResourcesGrid />
    </main>
  );
}
