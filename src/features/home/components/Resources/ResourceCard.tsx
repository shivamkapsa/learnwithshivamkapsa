import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  count: string;
  slug: string;
};

export function ResourceCard({
  title,
  description,
  count,
  slug,
}: Props) {
  return (
    <Link
      href={`/resources/${slug}`}
      className="group rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40"
    >
      <p className="text-sm font-medium text-amber-500">
        {count}
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-amber-500">
        Explore
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}