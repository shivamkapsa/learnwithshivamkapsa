import { notFound } from "next/navigation";

import { getCourseBySlug } from "@/features/courses/utils";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({
  params,
}: Props) {
  const { slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="py-20">
      <h1 className="text-center text-5xl font-bold">
        {course.title}
      </h1>

      <p className="mt-6 text-center text-muted-foreground">
        {course.description}
      </p>
    </main>
  );
}