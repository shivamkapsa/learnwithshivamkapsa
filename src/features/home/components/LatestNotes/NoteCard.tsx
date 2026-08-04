import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
};

export function NoteCard({
  title,
  description,
  category,
  readTime,
  slug,
}: Props) {
  return (
    <Link
      href={`/notes/${slug}`}
      className="group rounded-3xl border border-white/10 bg-card p-6 transition-all hover:-translate-y-1 hover:border-amber-500/40"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
          {category}
        </span>

        <span className="text-xs text-muted-foreground">
          {readTime}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-amber-400">
        Read Notes

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}