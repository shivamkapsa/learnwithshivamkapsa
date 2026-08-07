import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";
import { NoteContent } from "@/features/notes/components/NoteContent";
import { NoteHero } from "@/features/notes/components/NoteHero";
import { getNoteBySlug } from "@/features/notes/utils";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="py-20">
      <Container>
        <NoteHero note={note} />
        <NoteContent content={note.content} />
      </Container>
    </main>
  );
}
