import type { Resource } from "@/features/resources/types/resource";

type Props = {
  resource: Resource;
};

export function ResourceHero({ resource }: Props) {
  return (
    <section className="border-b border-border pb-10">
      <p className="font-semibold text-amber-500">{resource.category}</p>

      <h1 className="mt-4 text-5xl font-bold">{resource.title}</h1>

      <p className="mt-6 max-w-2xl text-muted-foreground">
        {resource.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>{resource.readingTime} read</span>

        {resource.tags.map((tag) => (
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
