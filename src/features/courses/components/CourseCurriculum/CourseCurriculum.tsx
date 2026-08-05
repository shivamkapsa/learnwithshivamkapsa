type Props = {
    curriculum: string[];
  };
  
  export function CourseCurriculum({
    curriculum,
  }: Props) {
    return (
      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Curriculum
        </h2>
  
        <div className="mt-8 space-y-4">
          {curriculum.map((lesson, index) => (
            <div
              key={lesson}
              className="rounded-xl border border-border p-4"
            >
              {index + 1}. {lesson}
            </div>
          ))}
        </div>
      </section>
    );
  }