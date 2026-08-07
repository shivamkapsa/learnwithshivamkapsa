import Link from "next/link";

import { Note } from "@/features/notes/types/note";

type Props = {
  note: Note;
};

export function NoteCard({
  note,
}: Props) {
  return (
    <Link
      href={`/notes/${note.slug}`}
      className="block rounded-2xl border border-border bg-card p-6 transition hover:border-amber-500"
    >
      <p className="text-sm text-amber-500">
        {note.category}
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {note.title}
      </h3>

      <p className="mt-3 text-muted-foreground">
        {note.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {note.readingTime}
      </p>
    </Link>
  );
}