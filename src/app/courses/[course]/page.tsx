// import { notFound } from "next/navigation";

// import { getLessonBySlug } from "@/features/courses/utils";

// type Props = {
//   params: Promise<{
//     course: string;
//     lesson: string;
//   }>;
// };

// export default async function LessonPage({
//   params,
// }: Props) {
//   const { lesson } = await params;

//   const data = getLessonBySlug(
//     lesson,
//   );

//   if (!data) {
//     notFound();
//   }

//   return (
//     <main className="mx-auto max-w-4xl py-20">
//       <h1 className="text-5xl font-bold">
//         {data.title}
//       </h1>

//       <p className="mt-4">
//         {data.duration}
//       </p>

//       <pre className="mt-10 whitespace-pre-wrap">
//         {data.content}
//       </pre>
//     </main>
//   );
// }

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
          curriculum={courseData.curriculum}
        />
      </Container>
    </main>
  );
}