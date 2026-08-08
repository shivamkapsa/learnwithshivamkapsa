import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge>404</Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            The page you are looking for does not exist or may have been
            moved. Let&apos;s get you back to learning.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Back to Home
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}