import Link from "next/link";

type Props = {
  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
};

export function LessonNavigation({
  previous,
  next,
}: Props) {
  return (
    <section className="mt-16 flex justify-between gap-6">
      <div>
        {previous && (
          <Link
            href={previous.href}
            className="text-amber-500"
          >
            ← {previous.title}
          </Link>
        )}
      </div>

      <div className="text-right">
        {next && (
          <Link
            href={next.href}
            className="text-amber-500"
          >
            {next.title} →
          </Link>
        )}
      </div>
    </section>
  );
}