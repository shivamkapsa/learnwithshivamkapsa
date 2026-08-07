import type { FeaturedCourse } from "@/content/home/courses";

type Props = FeaturedCourse;
  
  export function CourseCard({
    title,
    description,
    duration,
    lessons,
    level,
    free,
  }: Props) {
    return (
      <div className="group rounded-3xl border border-white/10 bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40">
  
        <div className="mb-4 flex items-center justify-between">
  
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
            {level}
          </span>
  
          <span className="text-xs text-zinc-500">
            {free ? "FREE" : "PREMIUM"}
          </span>
  
        </div>
  
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
  
        <p className="mt-4 text-muted-foreground">
          {description}
        </p>
  
        <div className="mt-8 flex justify-between text-sm text-zinc-500">
          <span>{lessons} Lessons</span>
          <span>{duration}</span>
        </div>
  
      </div>
    );
  }
