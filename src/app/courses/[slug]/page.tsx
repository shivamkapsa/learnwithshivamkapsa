import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";

import { getCourseBySlug } from "@/features/courses/utils";

import { CourseHero } from "@/features/courses/components/CourseHero";

import { CourseStats } from "@/features/courses/components/CourseStats";
import { CourseTechnologies } from "@/features/courses/components/CourseTechnologies";
import { CourseCurriculum } from "@/features/courses/components/CourseCurriculum";

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
    <main>
      <CourseHero course={course} />

      <Container>
        <CourseStats course={course} />

        <CourseTechnologies
          technologies={course.technologies}
        />

        <CourseCurriculum
          curriculum={course.curriculum}
        />
      </Container>
    </main>
  );
}