import { allNotes } from "@/content/notes";

export function getNoteBySlug(
  slug: string,
) {
  return allNotes.find(
    (note) => note.slug === slug,
  );
}