import type { Metadata } from "next";
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
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {
      title: "Note Not Found",
    };
  }

  return {
    title: note.title,
    description: note.description,
    alternates: {
      canonical: `/notes/${note.slug}`,
    },
    openGraph: {
      type: "article",
      title: note.title,
      description: note.description,
      url: `/notes/${note.slug}`,
    },
  };
}

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
