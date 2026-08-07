import Link from "next/link";

import { socialLinks } from "@/config/social";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-1 xl:flex">
      <Link
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        GitHub
      </Link>

      <Link
        href={socialLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        YouTube
      </Link>
    </div>
  );
}
