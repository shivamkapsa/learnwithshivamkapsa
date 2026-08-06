import Link from "next/link";

type Props = {
  courseTitle: string;
  courseSlug: string;
  title: string;
  duration: string;
};

export function LessonHero({
  courseTitle,
  courseSlug,
  title,
  duration,
}: Props) {
  return (
    <section className="border-b border-border pb-10">
      <Link
        href={`/courses/${courseSlug}`}
        className="text-sm text-amber-500"
      >
        ← Back to {courseTitle}
      </Link>

      <h1 className="mt-6 text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-4 text-muted-foreground">
        {duration}
      </p>
    </section>
  );
}