import { notFound } from "next/navigation";

import { getLessonBySlug } from "@/features/courses/utils";

type Props = {
  params: Promise<{
    course: string;
    lesson: string;
  }>;
};

export default async function LessonPage({
  params,
}: Props) {
  const { lesson } = await params;

  const data = getLessonBySlug(
    lesson,
  );

  if (!data) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl py-20">
      <h1 className="text-5xl font-bold">
        {data.title}
      </h1>

      <p className="mt-4">
        {data.duration}
      </p>

      <pre className="mt-10 whitespace-pre-wrap">
        {data.content}
      </pre>
    </main>
  );
}