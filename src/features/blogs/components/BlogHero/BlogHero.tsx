import { CalendarDays, Clock3 } from "lucide-react";

import type { Blog } from "@/features/blogs/types/blog";
import { formatBlogDate } from "@/features/blogs/utils";

type Props = {
  blog: Blog;
};

export function BlogHero({ blog }: Props) {
  return (
    <section className="border-b border-border pb-10">
      <p className="font-semibold text-amber-500">{blog.category}</p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {blog.title}
      </h1>

      <p className="mt-6 max-w-2xl text-muted-foreground">
        {blog.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 aria-hidden="true" className="size-4" />
          {blog.readingTime} read
        </span>

        <time
          dateTime={blog.publishedAt}
          className="inline-flex items-center gap-1.5"
        >
          <CalendarDays aria-hidden="true" className="size-4" />
          {formatBlogDate(blog.publishedAt)}
        </time>

        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
