import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import type { Blog } from "@/features/blogs/types/blog";
import { formatBlogDate } from "@/features/blogs/utils";

type Props = {
  blog: Blog;
};

export function BlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      aria-label={`Read ${blog.title}`}
      className="group block h-full rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-500/70 hover:shadow-xl hover:shadow-amber-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7"
    >
      <article className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <p className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-500">
            {blog.category}
          </p>

          <p className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
            <Clock3 aria-hidden="true" className="size-4" />
            {blog.readingTime} read
          </p>
        </div>

        <h2 className="mt-6 text-2xl font-bold tracking-tight transition-colors group-hover:text-amber-500 sm:text-3xl">
          {blog.title}
        </h2>

        <p className="mt-4 leading-7 text-muted-foreground">
          {blog.description}
        </p>

        <div className="mt-auto pt-8">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5 text-sm text-muted-foreground">
            <time
              dateTime={blog.publishedAt}
              className="inline-flex items-center gap-2"
            >
              <CalendarDays aria-hidden="true" className="size-4" />
              {formatBlogDate(blog.publishedAt)}
            </time>

            <span className="inline-flex items-center gap-1 font-semibold text-amber-500">
              Read article
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
