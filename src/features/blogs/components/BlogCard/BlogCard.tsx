import Link from "next/link";

import type { Blog } from "@/features/blogs/types/blog";

type Props = {
  blog: Blog;
};

export function BlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="block rounded-2xl border border-border bg-card p-6 transition hover:border-amber-500"
    >
      <p className="text-sm text-amber-500">{blog.category}</p>

      <h2 className="mt-3 text-2xl font-bold">{blog.title}</h2>

      <p className="mt-3 text-muted-foreground">{blog.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">{blog.readingTime}</p>
    </Link>
  );
}
