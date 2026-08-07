import { allNotes } from "@/content/notes";

import { Container } from "@/components/shared/Container";

import { NoteCard } from "../NoteCard";

export function NotesGrid() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allNotes.map((note) => (
            <NoteCard
              key={note.slug}
              note={note}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}