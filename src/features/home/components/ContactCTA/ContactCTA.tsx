import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/shared/Container";

import { contactCTA } from "@/content/home/contact";

export function ContactCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-card px-10 py-20 text-center">
          <Badge>{contactCTA.badge}</Badge>

          <h2 className="mt-6 text-5xl font-bold">
            {contactCTA.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {contactCTA.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href={contactCTA.primaryButton.href}
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:opacity-90"
            >
              {contactCTA.primaryButton.label}
            </Link>

            <Link
              href={contactCTA.secondaryButton.href}
              className="rounded-full border border-white/10 px-8 py-4 transition hover:border-amber-500"
            >
              {contactCTA.secondaryButton.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}