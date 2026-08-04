import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  level: string;
  description: string;
  slug: string;
};

export function LearningPathCard({
  title,
  level,
  description,
  slug,
}: Props) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="group rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40"
    >
      <p className="text-sm text-amber-400">{level}</p>

      <h3 className="mt-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-amber-400">
        Start Learning
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}