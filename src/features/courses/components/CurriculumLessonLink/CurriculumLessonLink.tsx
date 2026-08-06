import Link from "next/link";

type Props = {
  courseSlug: string;
  lessonSlug: string;
  title: string;
};

export function CurriculumLessonLink({
  courseSlug,
  lessonSlug,
  title,
}: Props) {
  return (
    <Link
      href={`/courses/${courseSlug}/${lessonSlug}`}
      className="block rounded-xl border border-border p-5 transition hover:border-amber-500 hover:bg-card"
    >
      {title}
    </Link>
  );
}