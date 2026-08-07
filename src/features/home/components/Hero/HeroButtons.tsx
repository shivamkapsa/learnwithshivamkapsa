import Link from "next/link";

import { heroContent } from "@/content/home/hero";
import { socialLinks } from "@/config/social";
import { buttonVariants } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link href="/courses" className={buttonVariants({ size: "lg" })}>
        {heroContent.primaryButton}
      </Link>

      <a
        href={socialLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size: "lg" })}
      >
        {heroContent.secondaryButton}
      </a>
    </div>
  );
}
