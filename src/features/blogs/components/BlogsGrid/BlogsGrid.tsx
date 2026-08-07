import { allBlogs } from "@/content/blogs";

import { Container } from "@/components/shared/Container";

import { BlogCard } from "../BlogCard";

export function BlogsGrid() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </Container>
    </section>
  );
}
