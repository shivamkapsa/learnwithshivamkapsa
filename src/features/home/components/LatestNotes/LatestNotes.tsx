import { Container } from "@/components/shared/Container";
import { latestNotes } from "@/content/home/latestNotes";
import { NoteCard } from "./NoteCard";

export function LatestNotes() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14">
          <p className="font-semibold text-amber-500">
            NOTES
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Latest Notes
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Quick revision notes, interview concepts and programming topics.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestNotes.map((note) => (
            <NoteCard
              key={note.id}
              {...note}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}