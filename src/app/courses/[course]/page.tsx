import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";

import { getCourseBySlug } from "@/features/courses/utils";

import { CourseHero } from "@/features/courses/components/CourseHero";
import { CourseStats } from "@/features/courses/components/CourseStats";
import { CourseTechnologies } from "@/features/courses/components/CourseTechnologies";
import { CourseCurriculum } from "@/features/courses/components/CourseCurriculum";

type Props = {
  params: Promise<{
    course: string;
  }>;
};
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { course } = await params;

  const courseData = getCourseBySlug(course);

  if (!courseData) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: courseData.title,
    description: courseData.description,
    alternates: {
      canonical: `/courses/${courseData.slug}`,
    },
    openGraph: {
      type: "article",
      title: courseData.title,
      description: courseData.description,
      url: `/courses/${courseData.slug}`,
    },
  };
}

export default async function CoursePage({
  params,
}: Props) {
  const { course } = await params;

  const courseData = getCourseBySlug(course);

  if (!courseData) {
    notFound();
  }

  return (
    <main>
      <CourseHero course={courseData} />

      <Container>
        <CourseStats course={courseData} />

        <CourseTechnologies
          technologies={courseData.technologies}
        />

<CourseCurriculum
  courseSlug={courseData.slug}
  curriculum={courseData.curriculum}
/>
      </Container>
    </main>
  );
}