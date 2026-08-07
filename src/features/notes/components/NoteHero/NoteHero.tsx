import type { Note } from "@/features/notes/types/note";

type Props = {
  note: Note;
};

export function NoteHero({ note }: Props) {
  return (
    <section className="border-b border-border pb-10">
      <p className="font-semibold text-amber-500">{note.category}</p>

      <h1 className="mt-4 text-5xl font-bold">{note.title}</h1>

      <p className="mt-6 max-w-2xl text-muted-foreground">
        {note.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>{note.readingTime} read</span>

        {note.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
