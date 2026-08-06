type Props = {
    lessons: string[];
    currentLesson: string;
  };
  
  export function LessonSidebar({
    lessons,
    currentLesson,
  }: Props) {
    return (
      <aside className="rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-6 text-xl font-bold">
          Course Content
        </h2>
  
        <div className="space-y-2">
          {lessons.map((lesson) => (
            <div
              key={lesson}
              className={`rounded-lg px-4 py-3 ${
                lesson === currentLesson
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:bg-muted"
              }`}
            >
              {lesson}
            </div>
          ))}
        </div>
      </aside>
    );
  }