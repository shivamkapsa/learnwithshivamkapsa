type Props = {
    technologies: string[];
  };
  
  export function CourseTechnologies({
    technologies,
  }: Props) {
    return (
      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Technologies
        </h2>
  
        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    );
  }