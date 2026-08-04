import { Container } from "@/components/shared/Container";
import { learningPaths } from "@/content/home/learningPaths";
import { LearningPathCard } from "./LearningPathCard";

export function LearningPaths() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14">
          <p className="font-semibold text-amber-500">
            ROADMAPS
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Learning Paths
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Follow structured learning paths designed to take you from beginner to job-ready.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <LearningPathCard
              key={path.id}
              {...path}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}