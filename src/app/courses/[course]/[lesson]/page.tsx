import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";

import { getLessonBySlug } from "@/features/courses/utils";

import { LessonHero } from "@/features/courses/components/LessonHero";
import { LessonContent } from "@/features/courses/components/LessonContent";
import { LessonNavigation } from "@/features/courses/components/LessonNavigation";
import { getLessonNavigation } from "@/features/courses/utils";
import { LessonSidebar } from "@/features/courses/components/LessonSidebar";

type Props = {
  params: Promise<{
    course: string;
    lesson: string;
  }>;
};
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lesson } = await params;

  const data = getLessonBySlug(lesson);

  if (!data) {
    return {
      title: "Lesson Not Found",
    };
  }

  return {
    title: data.title,
    description: `Learn ${data.title} with Learn With Shivam Kapsa.`,
    alternates: {
      canonical: `/courses/html/${data.slug}`,
    },
    openGraph: {
      type: "article",
      title: data.title,
      description: `Learn ${data.title} with Learn With Shivam Kapsa.`,
      url: `/courses/html/${data.slug}`,
    },
  };
}

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
        {/* <LessonHero
          courseTitle="HTML"
          courseSlug="html"
          title={data.title}
          duration={data.duration}
        />

        <LessonContent content={data.content} />
        <LessonNavigation
          previous={navigation.previous ?? undefined}
          next={navigation.next ?? undefined}
        /> */}
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

<LessonSidebar
  lessons={[
    "Introduction",
    "HTML Elements",
    "Forms",
    "Tables",
    "Semantic HTML",
  ]}
  currentLesson={data.title}
/>

<div>

  <LessonHero
    courseTitle="HTML"
    courseSlug="html"
    title={data.title}
    duration={data.duration}
  />

  <LessonContent
    content={data.content}
  />

  <LessonNavigation
    previous={navigation.previous ?? undefined}
    next={navigation.next ?? undefined}
  />

</div>

</div>
      </Container>
    </main>
  );
}
