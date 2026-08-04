import { Container } from "@/components/shared/Container";
import { featuredProjects } from "@/content/home/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="py-24">
      <Container>

        <div className="mb-14">

          <p className="font-semibold text-amber-500">
            PROJECTS
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Real-world applications built using modern web technologies.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}