import type { Blog } from "@/features/blogs/types/blog";

type Props = {
  blog: Blog;
};

export function BlogHero({ blog }: Props) {
  return (
    <section className="border-b border-border pb-10">
      <p className="font-semibold text-amber-500">{blog.category}</p>

      <h1 className="mt-4 text-5xl font-bold">{blog.title}</h1>

      <p className="mt-6 max-w-2xl text-muted-foreground">
        {blog.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>{blog.readingTime} read</span>

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
