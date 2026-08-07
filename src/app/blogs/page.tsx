import { BlogsGrid } from "@/features/blogs/components/BlogsGrid";
import { BlogsPageHero } from "@/features/blogs/components/BlogsPageHero";

export default function BlogsPage() {
  return (
    <main>
      <BlogsPageHero />
      <BlogsGrid />
    </main>
  );
}
