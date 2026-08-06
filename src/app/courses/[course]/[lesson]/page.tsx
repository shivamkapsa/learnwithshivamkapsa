import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";

import { getLessonBySlug } from "@/features/courses/utils";

import { LessonHero } from "@/features/courses/components/LessonHero";
import { LessonContent } from "@/features/courses/components/LessonContent";
import { LessonNavigation } from "@/features/courses/components/LessonNavigation";
import { getLessonNavigation } from "@/features/courses/utils";

type Props = {
  params: Promise<{
    course: string;
    lesson: string;
  }>;
};

export default async function LessonPage({ params }: Props) {
  const { lesson } = await params;

  const data = getLessonBySlug(lesson);
  const navigation = getLessonNavigation();

  if (!data) {
    notFound();
  }

  return (
    <main className="py-20">
      <Container>
        <LessonHero
          courseTitle="HTML"
          courseSlug="html"
          title={data.title}
          duration={data.duration}
        />

        <LessonContent content={data.content} />
        <LessonNavigation
          previous={navigation.previous ?? undefined}
          next={navigation.next ?? undefined}
        />
      </Container>
    </main>
  );
}
