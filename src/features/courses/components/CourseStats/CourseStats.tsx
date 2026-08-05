import { Course } from "../../types/course";

type Props = {
  course: Course;
};

export function CourseStats({
  course,
}: Props) {
  return (
    <div className="mt-12 flex gap-10">

      <div>
        <h3 className="text-3xl font-bold">
          {course.lessons}
        </h3>

        <p>Lessons</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">
          {course.duration}
        </h3>

        <p>Duration</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">
          {course.level}
        </h3>

        <p>Level</p>
      </div>

    </div>
  );
}