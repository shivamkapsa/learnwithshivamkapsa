import { NotesPageHero } from "@/features/notes/components/NotesPageHero";
import { NotesGrid } from "@/features/notes/components/NotesGrid";

export default function NotesPage() {
  return (
    <main>
      <NotesPageHero />

      <NotesGrid />
    </main>
  );
}