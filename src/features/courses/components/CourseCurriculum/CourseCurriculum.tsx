import { CurriculumLessonLink } from "../CurriculumLessonLink";

type Props = {
  courseSlug: string;
  curriculum: string[];
};

export function CourseCurriculum({
  courseSlug,
  curriculum,
}: Props) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        Curriculum
      </h2>

      <div className="mt-8 space-y-4">
        {curriculum.map((lesson, index) => (
          <CurriculumLessonLink
            key={lesson}
            courseSlug={courseSlug}
            lessonSlug={lesson
              .toLowerCase()
              .replaceAll(" ", "-")}
            title={`${index + 1}. ${lesson}`}
          />
        ))}
      </div>
    </section>
  );
}