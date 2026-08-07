import { allBlogs } from "@/content/blogs";
import { allCourses } from "@/content/courses";
import { allNotes } from "@/content/notes";
import { allResources } from "@/content/resources";

export function HeroStats() {
  const stats = [
    { value: allCourses.length, label: "Courses" },
    { value: allNotes.length, label: "Notes" },
    { value: allResources.length, label: "Resources" },
    { value: allBlogs.length, label: "Blogs" },
  ];

  return (
    <div className="mt-16 flex flex-wrap gap-10">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold">{stat.value}</h3>

          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
