import { allBlogs } from "@/content/blogs";

import { Container } from "@/components/shared/Container";

import { BlogCard } from "../BlogCard";

export function BlogsGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid auto-rows-fr gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </Container>
    </section>
  );
}
