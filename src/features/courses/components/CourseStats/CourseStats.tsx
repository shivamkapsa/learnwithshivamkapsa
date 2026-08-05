import { Course } from "../../types/course";

type Props = {
  course: Course;
};

export function CourseStats({
  course,
}: Props) {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-3xl font-bold">
            {course.lessons}
          </h3>

          <p className="text-muted-foreground">
            Lessons
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            {course.duration}
          </h3>

          <p className="text-muted-foreground">
            Duration
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            {course.level}
          </h3>

          <p className="text-muted-foreground">
            Level
          </p>
        </div>
      </div>
    </section>
  );
}