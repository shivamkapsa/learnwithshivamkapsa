import Link from "next/link";

import { Badge } from "@/components/ui/Badge";

import { Container } from "./Container";

type Props = {
  title: string;
  description: string;
};

export function ComingSoonPage({ title, description }: Props) {
  return (
    <main className="py-24">
      <Container>
        <section className="rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-10">
          <Badge>Coming Soon</Badge>

          <h1 className="mt-6 text-5xl font-bold">{title}</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Back to Home
          </Link>
        </section>
      </Container>
    </main>
  );
}
